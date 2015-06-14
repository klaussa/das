angular.module('DojoAnalyticsSuite').controller('DashboardIdeageneratorsController', function ($scope, $interval, ideaService, dataService,itemService,helperService) {


    $scope.datefrom = helperService.getCurrentDate();
    $scope.dateto =  helperService.getNextWeekDate();
    $scope.loadingState = false;

    $scope.currentCity = 'London';
    $scope.clicks = [];
    $scope.changeCity = function(city){
        $scope.loadingState = true;
        ideaService.getList(city, {
            'limit': '70',
            'published': true,
            'sort':'dates.start_date',
            'from': $scope.datefrom,
            'to': $scope.dateto
        }).then(function (ideas) {
            $scope.ideas = ideas;



            $scope.clicks = [];
            $scope.ideas.forEach(function(idea){
                $scope.clicks.push(idea.clicksNumber);
            });
            $scope.loadingState = false;

        }).catch(function (error) {
            alert(error);
        });


        $scope.currentCity = city;
    };

    $scope.changeCity('London');


    $scope.resetData = function(){
        ideaService.clearCache($scope.currentCity,$scope.datefrom,$scope.dateto);
        $scope.changeCity($scope.currentCity);

    };




    $scope.updateData = function(datefrom,dateto){
        $scope.datefrom = new Date(datefrom);
        $scope.dateto = new Date(dateto);
        $scope.resetData();

    };


    //$scope.id="5501b1648ef0b4eccc41813a";
    //$scope.datefrom="2015-06-05T00:00:00.000Z";
    //$scope.dateto="2015-06-06T00:00:00.000Z";
    //
    //
    //$scope.takeData = function(id,datefrom,dateto){
    //    var actualdate = new Date(datefrom);
    //    var enddate =  new Date(dateto)
    //    itemService.getItemClicks('London',id,actualdate,enddate).then(function(response){
    //       console.log(response);
    //    });
    //
    //};

    //end of controller
});
  
