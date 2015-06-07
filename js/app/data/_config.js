angular.module('data').config(function($httpProvider){

	$httpProvider.defaults.headers.common['dojo-secret'] = 'KlaussLovesDojo';



	// end of config 
});