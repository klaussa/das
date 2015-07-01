/**
 * Created by klauss on 18/06/2015.
 */
angular.module('DojoAnalyticsSuite').controller('DashboardIdeaController', function($timeout, $scope, $stateParams,ideaService,helperService,dataService,$http) {

    var datefrom = helperService.getCurrentDate();
    var dateto =  helperService.getNextWeekDate();

    $scope.currentCity = helperService.getCurrentCity() ;
    var id =  $stateParams.id;
    $scope.loadingState = true;
    ideaService.get($scope.currentCity, id).then(function(reply){
         $scope.idea = reply;

    });


    var url="http://dojo-analytics-api.elasticbeanstalk.com/api/v1/" + $scope.currentCity + "/datas?&from="+ datefrom +"&data_type=idea%20click&idea_ids="+ id+ "&limit=400&fields=loc,user_id";
    var call = $http.get(url).then(function(reply){
        return reply.data.datas;
    });
    call.then(function(reply){
        $scope.coordinates =[];
        reply.forEach(function (item) {
            var coordinate = [];
            coordinate[0] = item.loc.coordinates[1];
            coordinate[1] = item.loc.coordinates[0];
            coordinate[2] = 1;
            $scope.coordinates.push(coordinate);
        });

    });








    //end of Controller
});