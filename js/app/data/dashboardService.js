angular.module('data').service('dashboardService', function ($http) {

    var baseUrl = 'http://dojo-analytics-api.elasticbeanstalk.com/api/v1/';

    this.getUsers = function (city, timeStart) {
        var numbers = [];
        return $http.get(baseUrl + city + '/datas', {
            params: {
                limit: 2000,
                from: timeStart,
                fields: 'user_id,data_type'
            }
        }).then(function (result) {
            var reply = result.data.datas;
            reply.forEach(function (el) {
                if (el.data_type != 'device token added' && el.data_type != 'user locations' && el.data_type != 'home') {
                    numbers.push(el.user_id);
                }
            });
            return _.uniq(numbers);
        });

    };


    this.getActive = function (city, timeStart) {
        var numbers = [];
        return $http.get(baseUrl + city + '/datas', {
            params: {
                limit: 900000,
                from: timeStart,
                fields: 'user_id,data_type'
            }
        }).then(function (result) {
            var reply = result.data.datas;
            reply.forEach(function (el) {
                if (el.data_type != 'device token added' && el.data_type != 'user locations' && el.data_type != 'home') {
                    numbers.push(el.user_id);
                }
            });
            return _.uniq(numbers);
        });

    };
});
