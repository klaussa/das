angular.module('data').service('itemService', function($http) {
  // Stepan was here
  var baseUrl = 'http://dojo-analytics-api.elasticbeanstalk.com/api/v1/London'

  this.get = function(id) {
  return $http.get( baseUrl + '/items', {params : {id: id}} ).then(function(response){
		return response.data.items;
	  })
      .catch(function(data, status, headers, config) {
      	alert("Erorr" + " --  " +data  + " --  " + status  + " --  " + headers   + " --  " + config);
      });
  };

 

 

});

// , { headers: {'dojo-secret': 'KlaussLovesDojo'}}