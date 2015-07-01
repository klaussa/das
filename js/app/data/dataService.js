/**
 * Created by klauss on 08/06/2015.
 */
angular.module('data').service('dataService', function ($http) {

    var baseUrl = 'http://dojo-analytics-api.elasticbeanstalk.com/api/v1/';

    this.getClicks = function (city,ideaId, timeStart, timeEnd) {

        return $http.get(baseUrl + city +  '/datas', {params: {
            data_type: 'idea click',
            idea_ids: ideaId,
            from: timeStart.toISOString(),
            to : timeEnd.toISOString(),
            count: true
        }}).then(function(result){
            return result.data.count;
        });
    };

    this.getCoords = function (city,ideaId, timeStart, timeEnd) {

        return $http.get(baseUrl + city +  '/datas', {params: {
            data_type: 'idea click',
            idea_ids: ideaId,
            from: timeStart.toISOString(),
            to : timeEnd.toISOString(),
        }}).then(function(result){

            return result.data.loc;
        } );
    };
});