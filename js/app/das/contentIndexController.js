 angular.module('DojoAnalyticsSuite').controller('ContentIndexController', function($scope,dashboardService,$interval) {
  $interval(function(){
   var now = new Date();
   var minutes =  now.getMinutes() - 5;
   now.setMinutes(minutes);

   $scope.tableData2 =[];
   dashboardService.getUsers('Paris',now.toISOString()).then(function(reply){
    $scope.numbers2 = reply.length;
    $scope.tableData2.push(reply.length);
   });


  }, 800);



//end of controller
});
