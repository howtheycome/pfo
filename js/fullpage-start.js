var draw_bar = function(){
  var ctx = document.getElementById("bar_chart_area").getContext("2d");
  window.myBar = new Chart(ctx).Bar(barChartData, {
    responsive : true
  });
}

var draw_radar = function(){
  window.myRadar = new Chart(document.getElementById("radar_chart_area").getContext("2d")).Radar(radarChartData, {
    responsive: true
  });
}

var draw_line = function(){
  var ctx = document.getElementById("line_chart_area").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, {
    responsive: true
  });
}

var draw_doughnut = function(){
  var ctx = document.getElementById("doughnut_chart_area").getContext("2d");
  window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true}); 
}

$(document).ready(function() {
  $('#fullpage').fullpage({
    menu: false,
    anchors:['home', 'women', 'research'],
    navigationTooltips: ['home', 'women', 'research'],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    loopHorizontal: false,

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
      if(index == 2 && slideIndex == 0){
        draw_radar();
      }

      if(index == 2 && slideIndex == 1){
        draw_bar();
      }

      if(index == 2 && slideIndex == 2){
        draw_line();
      }

      if(index == 2 && slideIndex == 3){
        draw_doughnut();
      }
    },

    sectionsColor : ['#000', '#fff', '#fff'],
  });
});
