angular.module('DojoAnalyticsSuite').controller('DashboardIdeageneratorsController', function ($scope, $interval, ideaService, dataService,itemService) {

    $scope.loadingState = false;

    $scope.currentCity = 'London';
    $scope.clicks = [];
    $scope.changeCity = function(city){
        $scope.loadingState = true;
        ideaService.getList(city, {
            'limit': '70',
            'published': true,
            'sort':'dates.start_date',
            'from': new Date('2015-06-08T00:00:00'),
            'to': new Date((new Date()).setDate((new Date()).getDate() + 7))
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
        ideaService.clearCache($scope.currentCity);
        $scope.changeCity($scope.currentCity);
    };

    $scope.datefrom = new Date('2015-06-08T00:00:00');
    $scope.dateto = new Date((new Date()).setDate((new Date()).getDate() + 7));


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
  
