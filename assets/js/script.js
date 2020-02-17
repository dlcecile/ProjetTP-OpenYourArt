$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});
// ====================================
$(document).ready(function(){
  $(".card").mouseover(function(){
    $(".btn").show();
  });
  $(".card").mouseout(function(){
    $(".btn").hide();
		  });
	$(".btn").mouseover(function(){
		$(".btn").css({"background": "#BB0408", "color": "white"});
	});
	$(".btn").mouseout(function(){
		$(".btn").css({"background": " linear-gradient( #c3aa5b, white)", "color": "black"});
	});
});
