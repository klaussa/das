angular.module('DojoAnalyticsSuite').directive('myDirective', function(){
    function link(scope, el, attr){
        var data = scope.info;

        var w = el[0].parentNode.offsetWidth, h = 300;
        var svg = d3.select(el[0]).append('svg')
            .attr('width', w)
            .attr('height', h);

        var xScale = d3.scale.ordinal()
            .domain(d3.range(data.length))
            .rangeBands([0,w],0.1,0.3);

        var yScale = d3.scale.linear()
            .domain([0,d3.max(data) * 1.1])
            .range([0,h]);

            scope.$watch('info', function(data){
debugger
                svg.selectAll('rect')
                    .data(data)
                    .enter()
                    .append('rect')
                    .attr('class', 'bar')
                    .attr('x', function (d,i) {
                        return xScale(i) ;
                    })
                    .attr('y', function(d,i){
                        return h - yScale(d);
                    })
                    .attr('width', xScale.rangeBand())
                    .attr('height', function (d) {
                        return yScale(d);
                    });



            });







    }
return {
    link: link,
    restrict: 'E',
    scope: { info: '=info' }
};
});



