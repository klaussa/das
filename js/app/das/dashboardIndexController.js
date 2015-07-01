angular.module('DojoAnalyticsSuite').controller('DashboardIndexController', function($scope,dashboardService,lodash,$interval, helperService) {



    var now = new Date();
    var minutes =  now.getMinutes() - 5;
    now.setMinutes(minutes);

    $scope.parisTable =[];
    $interval(function(){
        dashboardService.getUsers('London',now.toISOString()).then(function(response){

            $scope.tableData = [];
            $scope.numbers = response.length;
            $scope.tableData.push(response.length);
        });



        dashboardService.getUsers('Paris',now.toISOString()).then(function(reply){
            $scope.parisData = reply.length;
            $scope.parisTable.push(reply.length);
        });

    }, 1200);

    var today = helperService.getCurrentDate();
    today.setHours(0);

    //
    //dashboardService.getActive('London',today).then(function(response){
    //    $scope.dailyActive = response.length;
    //
    //});
    //
    //dashboardService.getActive('Paris',today).then(function(response){
    //    $scope.dailyParis = response.length;
    //
    //});

	//end of controller


    //response.data.datas.forEach(function(el){
    //
    //    if(el.data_type != 'device token added' && el.data_type != 'user locations' && el.data_type != 'home'){
    //        numbers.push(el.user_id);
    //    };
    //});
});