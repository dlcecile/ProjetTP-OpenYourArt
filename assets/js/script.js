$(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});
// ====================================
$(document).ready(function(){
	$(".card").mouseout(function(){
		// récuprer id de la carte
		var idCard = $(this).attr('id');
		$('#'+ idCard + ' .btn').hide()
		// $(".btn").hide();
	});
	$(".card").mouseover(function(){
		var idCard = $(this).attr('id');
		$('#'+ idCard + ' .btn').show()
		// $(".btn").show();
	});
	$(".btn").mouseover(function(){
		$(".btn").css({"background": "#BB0408", "color": "white"});
	});
	$(".btn").mouseout(function(){
		$(".btn").css({"background": " linear-gradient( #c3aa5b, white)", "color": "black"});
	});
});

// Créer une fonction PHP avec un foreach
// $id=0
// id="<?= id ++>"
