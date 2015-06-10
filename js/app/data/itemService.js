angular.module('data').service('itemService', function($http) {
  // Stepan was here
  var baseUrl = 'http://dojo-analytics-api.elasticbeanstalk.com/api/v1/'

  this.get = function(city, id) {
  return $http.get( baseUrl + city +  '/items/' + id ).then(function(response){
		return response.data.item;
	  })
      .catch(function(data, status, headers, config) {
      	alert("Erorr" + " --  " +data  + " --  " + status  + " --  " + headers   + " --  " + config);
      });
  };

 

});

// , { headers: {'dojo-secret': 'KlaussLovesDojo'}}