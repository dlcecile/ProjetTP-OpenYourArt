$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});
// ====================================
$(document).ready(function(){
  $("img").mouseover(function(){
    $("a").css("display", "block");
  });
  $("img").mouseout(function(){
    $("a").css("display", "none");
  });
});
