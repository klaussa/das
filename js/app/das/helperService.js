/**
 * Created by klauss on 13/06/2015.
 */
angular.module('DojoAnalyticsSuite').service('helperService', function () {
    var currentCity;
    this.getCurrentDate = function(){
        var dateFrom = new Date();
        dateFrom.setUTCHours(0);
        dateFrom.setMinutes(0);
        dateFrom.setSeconds(0);
        return dateFrom;
    };

    this.getNextWeekDate = function(){
       var today = this.getCurrentDate(),
        nextWeekDate =new Date();

        nextWeekDate = new Date(nextWeekDate.setDate(today.getDate() + 7));
        return nextWeekDate;

    };


    this.setCurrentCity = function(city){
         currentCity = city;

    };
    this.getCurrentCity = function(){
        return currentCity;
    };

});