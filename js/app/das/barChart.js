angular.module('DojoAnalyticsSuite').directive('barChart', function($state, helperService){
    function link(scope, el, attr){
        var data = scope.data;


        var w = el[0].parentNode.offsetWidth, h = 300;
            var svg = d3.select(el[0]).append('svg')
            .attr('width', w)
            .attr('height', h);



           scope.$watch('data', function(data){

            svg.selectAll("rect").remove();
            svg.selectAll("text").remove();

            var clicks = [];
            data.forEach(function(item){
                clicks.push(item.clicksNumber);
            });

               var xScaleNr = d3.scale.ordinal()
                   .domain(clicks)
                   .rangeBands([0,w],0.1,0.3);

            var xScale = d3.scale.ordinal()
                .domain(d3.range(clicks.length))
                .rangeBands([0,w],0.1,0.3);


            var yScale = d3.scale.linear()
                .domain([0,d3.max(clicks) * 1.1])
                .range([0,h]);


               var div = d3.select(el[0]).append("div")
                   .attr("class", "tooltip")
                   .style("opacity", 0);

            svg.selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('class', function(d){return isWeekend(d.dates.start_date, d.dates.end_date)})
                .attr('x', function (d,i) {
                    return xScale(i) ;
                })
                .attr('y', function(d,i){
                    return h - yScale(d.clicksNumber);
                })
                .attr('width', xScale.rangeBand())
                .attr('height', function (d) {
                    return yScale(d.clicksNumber);
                }).on("click", function (d){mouseClick(d)})
                .on("mouseover", function(d) {
                    div.transition()
                        .duration(200)
                        .style("opacity", .9);
                    div .html("<img  style='max-width:100px;'src='"+d.image_url+"'/>")
                        .style("right", 20 + "px")
                        .style("top", 0 + "px");
                })
                .on("mouseout", function(d) {
                    div.transition()
                        .duration(500)
                        .style("opacity", 0);
                });


               function mouseClick(data) {
                        helperService.setCurrentCity(data.city);
             //  alert(data._id + '-' + isWeekend(data.dates.start_date));
                        $state.go("dashboard.idea", { "id": data._id });
                    }
                    function isWeekend(datefrom,dateto){
                        if(datefrom.getDay() == 6 ){return"sunday"}
                        if(datefrom.getDay() == 5){return "friday"}
                        if(datefrom.getDay() == 4){return "thursday"}
                        if(datefrom.getDay() == 3){return "wednesday"}
                        if(datefrom.getDay() == 2){return "tuesday"}
                        if(datefrom.getDay() == 1){return "monday"}
                        if(datefrom.getDay() == 0){return "saturday"}
                    };




             svg.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .text(function(d) {
                    return d.clicksNumber;
                })
                .attr("x", function(d,i) {
                    return xScale(i);
                })
                .attr("y", function(d) {
                    return h - yScale(d.clicksNumber);
                })




        });


    }
    return {
        link: link,
        restrict: 'E',
        scope: { data: '=' }
    };
});



