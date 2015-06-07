angular.module('DojoAnalyticsSuite').controller('DashboardIdeageneratorsController', function($scope, $interval, ideaService) {

 	ideaService.getList({'limit':'5','search':'Ice Cream'}).then(function(ideas){
      $scope.ideas = ideas;
 	}).catch(function(error){
 		alert(error)
 	});



 // this month
 // calendar 
 // 


  //end of controller
});
  
