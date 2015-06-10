angular.module('DojoAnalyticsSuite').controller('DashboardIdeageneratorsController', function ($scope, $interval, ideaService, dataService) {

    $scope.currentCity = 'London';

    $scope.changeCity = function(city){
        ideaService.getList(city, {
            'limit': '70',
            'published': true,
            'sort':'dates.start_date',
            'from': new Date('2015-06-08T00:00:00'),
            'to': new Date((new Date()).setDate((new Date()).getDate() + 7))
        }).then(function (ideas) {


            $scope.ideas = ideas;


        }).catch(function (error) {
            alert(error);
        });

        $scope.currentCity = city;


    };

    $scope.changeCity('London');


    $scope.resetData = function(){
        ideaService.clearCache($scope.currentCity);
        $scope.changeCity($scope.currentCity);
    };


    //end of controller
});
  
