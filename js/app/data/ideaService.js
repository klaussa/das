angular.module('data').service('ideaService', function ($q, $http, itemService, dataService, helperService) {
    // klauss was here
    var defaultfrom = helperService.getCurrentDate();
    var defaultto =  helperService.getNextWeekDate();
    var baseUrl = 'http://dojo-analytics-api.elasticbeanstalk.com/api/v1/'

    var cachedList = {},
        cacheOne = {};
    this.get = function (city, id) {

        var self = this;

        if(cacheOne[id]){
            return $q.when(cacheOne[id]);
        }

        return $http.get(baseUrl + city + '/ideas/'+ id).then(function(reply){
            var idea = reply.data.idea;

            return dataService.getClicks(city, idea._id,
                defaultfrom,
                defaultto
            ).then(function (clicksNumber) {

                    idea.clicksNumber = clicksNumber;
                    self.setOneCache(idea._id, idea);
                    return idea;


                })
        });
    };

    this.setOneCache = function(id, idea) {
        cacheOne[id] = idea;
    };

    function getKey (city,datefrom,dateto){
        var key = city + '/'+ datefrom.toString().slice(0,10) + '/' + dateto.toString().slice(0,10);
        return key;
    };

    this.clearCache = function (city,datefrom,dateto) {
        cachedList[getKey(city,datefrom,dateto)] = {};
    };

    function setCache(city,datefrom,dateto,ideas){
        cachedList[getKey(city,datefrom,dateto)] = ideas;
    };
    function getFromCache(city,datefrom,dateto){
        var key = getKey(city,datefrom,dateto);
        return (cachedList[key] && Object.keys(cachedList[key]).length)?cachedList[key]:null;
    };

    this.getList = function (city, params) {
        var cachedIdeas = getFromCache(city, params.from, params.to),
            self = this;

        if (cachedIdeas) {
            return $q.when(cachedIdeas);
        };


        return $http.get(baseUrl + city + '/ideas', {params: params}).then(function (response) {

            var ideas = response.data.ideas,
                promises = [];

            ideas.forEach(function (idea) {



                idea.dates = idea.dates[idea.dates.length - 1];
                idea.dates.start_date = new Date(idea.dates.start_date);
                idea.dates.end_date = new Date(idea.dates.end_date);


                idea.items.forEach(function (item) {
                    //promises.push(itemService.get(city, item.item_id).then(function (itemData) {
                    //    item.title = itemData.title;
                    //}));

                    //promises.push(itemService.getItemClicks(city, item.item_id, idea.dates.start_date, idea.dates.end_date).then(function (itemClicks) {
                    //    item.clicks = itemClicks;
                    //}));
                });


                promises.push(dataService.getClicks(city, idea._id,
                    params.from,
                    params.to
                ).then(function (clicksNumber) {
                        idea.clicksNumber = clicksNumber;
                        self.setOneCache(idea._id, idea);

                    }));


            });

            setCache(city, params.from, params.to, ideas);


            return $q.all(promises).then(function () {
                return ideas;
            });
        })
            .catch(function (data, status, headers, config) {
                alert("Erorr" + " --  " + data + " --  " + status + " --  " + headers + " --  " + config);
            });


    };


});


// , { headers: {'dojo-secret': 'KlaussLovesDojo'}}