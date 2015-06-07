angular.module('data').service('ideaService', function ($http, itemService) {
    // Stepan was here
    var baseUrl = 'http://dojo-analytics-api.elasticbeanstalk.com/api/v1/London'

    this.get = function (id) {

    }

    this.getList = function (params) {



        return $http.get(baseUrl + '/ideas', {params: params}).then(function (response) {

            var ideas = response.data.ideas;
            ideas.forEach(function (idea) {
                idea.items.forEach(function (item) {
                    itemService.get(item.item_id).then(function (itemData) {
                        item.title = itemData.title;
                    });
                });
            });


            return ideas;
        })
            .catch(function (data, status, headers, config) {
                alert("Erorr" + " --  " + data + " --  " + status + " --  " + headers + " --  " + config);
            });



    };




});

// , { headers: {'dojo-secret': 'KlaussLovesDojo'}}