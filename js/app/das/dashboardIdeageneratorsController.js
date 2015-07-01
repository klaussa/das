angular.module('DojoAnalyticsSuite').controller('DashboardIdeageneratorsController', function ($scope, $interval, ideaService, dataService,itemService, userSession, helperService, $http) {


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
            //$scope.clicks = [];
            //$scope.ideas.forEach(function(idea){
            //    $scope.clicks.push(idea.clicksNumber);
            //});
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







    //$scope.things.datas.forEach(function(data){
    //    $scope.taxiData.push(new google.maps.LatLng(data.loc.coordinates[1], data.loc.coordinates[0]))
    //});

    //5579f4245864f34408dd2f5f
    //55200aa755cf2b9b06421a65

    //
    //var numbers = [];
    //var url = "http://dojo-analytics-api.elasticbeanstalk.com/api/v1/London/datas?&from=2015-06-22T01:00:25.696Z&to=2015-06-22T08:00:25.696Z&data_type=idea%20click&limit=100&distinct=user_id";
    //$http.get(url).then(function(response){
    //  response.data.datas.forEach(function(el){
    //      userSession.getUserSessions(el).then(function(reply){
    //    console.log(reply[2]);
    //      })
    //   });
    //  //  $scope.avgclicks = number / response.data.datas.length;
    //
    //});


   // userSession.getUserSessions('5579f4245864f34408dd2f5f').then(function(reply){
   //     $scope.sessions = reply;
   //});


    //end of controller
});
  
