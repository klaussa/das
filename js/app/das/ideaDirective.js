 angular.module('DojoAnalyticsSuite').directive('idea', function(itemService){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/js/app/das/views/idea-directive.html',
    scope: {
        idea : '=',
        datefrom: '=',
        dateto: '='
    },
    link: function(scope, element, attr) {

        scope.idea.items.forEach(function(item) {
            itemService.getItemClicks('London',item.idem_id,scope.datefrom,scope.dateto).then(function(response){
                item.clicks = response;
                console.log(response);
            });
        });
    }

  }
// End of Idea Directive
});
 