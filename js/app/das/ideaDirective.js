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

        //scope.idea.items.forEach(function(item) {
        //    itemService.getItemClicks('London',item.item_id,scope.datefrom,scope.dateto).then(function(response){
        //
        //        item.clicks = response;
        //
        //    });
        //});
    }

  }
// End of Idea Directive
});
 