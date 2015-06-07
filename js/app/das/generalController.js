angular.module('DojoAnalyticsSuite').controller('GeneralController', function($scope, $location) {
	
 $scope.panels = [
       {"id": 0, "name": "General Stats", "link": "dashboard.index"},
       {"id": 1, "name": "Content", "link": "content.index"}
      
      
  ];

	//end of controller
});