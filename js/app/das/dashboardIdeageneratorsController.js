angular.module('DojoAnalyticsSuite').controller('DashboardIdeageneratorsController', function($scope, $interval, ideaService) {

	ideaService.getList({'limit':'5','search':'Ice Cream'}).then(function(ideas){
		$scope.ideas = ideas;
		debugger
	}).catch(function(error){
		alert(error)
	});



  //end of controller
});
  
