angular.module('DojoAnalyticsSuite').controller('DashboardAbstractController', function($scope, $location, $http, $interval) {
  

  $scope.sections = [
       {"id": 0, "title": "Idea Generators", "url": "dashboard.ideagenerators"},
       {"id": 1, "title": "Categories", "url": "dashboard.categories"},
       {"id": 2, "title": "Venues", "url": "dashboard.categories"},
       {"id": 3, "title": "Items", "url": "dashboard.categories"}       
  ];


  $http.get('http://dojo-analytics-api.elasticbeanstalk.com/api/v1/London/datas', {
    headers: {'dojo-secret': 'KlaussLovesDojo'}}).
 success(function(data, status, headers, config) {
  $scope.ceva = data.datas; }).
  error(function(data, status, headers, config) {
  alert("Erorr" + " --  " +data  + " --  " + status  + " --  " + headers   + " --  " + config);
  });


  //end of controller
});