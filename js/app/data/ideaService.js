angular.module('data').service('ideaService', function ($q, $http, itemService, dataService) {
    // Stepan was here
    var baseUrl = 'http://dojo-analytics-api.elasticbeanstalk.com/api/v1/'
    var cache = {};
    this.get = function (id) {

    }
    this.clearCache = function(city){
        cache[city] = {};
    };
    this.getList = function (city, params) {
        if(cache[city] && Object.keys(cache[city]).length){
           return $q.when(cache[city]);
        };



        return $http.get(baseUrl + city  + '/ideas', {params: params}).then(function (response) {

            var ideas = response.data.ideas;




            ideas.forEach(function (idea) {
                idea.dates = idea.dates[idea.dates.length-1];
                idea.dates.start_date = new Date(idea.dates.start_date);
                idea.dates.end_date = new Date(idea.dates.end_date);


                idea.items.forEach(function (item) {
                    itemService.get(city, item.item_id).then(function (itemData) {
                        item.title = itemData.title;
                    });
                });

                dataService.getClicks(city,idea._id,
                    params.from,
                    params.to
                ).then(function(clicksNumber){

                        idea.clicksNumber = clicksNumber;

                    });
            });

            cache[city] = ideas;

            return ideas;
        })
            .catch(function (data, status, headers, config) {
                alert("Erorr" + " --  " + data + " --  " + status + " --  " + headers + " --  " + config);
            });



    };




});





// , { headers: {'dojo-secret': 'KlaussLovesDojo'}}