$(function(){
  // Au clique sur n'importe quelle image
  $('img').click(function(){
    // On récupère son lien dans une variable
    var image = $(this).attr('src');
    // On applique cet lien à l'image dans la modal
    $('#modalImage').attr('src', image);
    // Et on affiche la modal
    $('#modal').modal('show');
  })
});

// ==============================================
// function clignotement(){
// if (document.getElementById("price").style.color=="black")
// document.getElementById("price").style.color="red";
// else
// document.getElementById("price").style.color="black";
// }
// // mise en place de l appel régulier de la fonction toutes les 0.5 secondes
// setInterval("clignotement()", 100);
$(document).ready(function(){
	$(".btn").mouseover(function(){
		$(this).css({"background": "#BB0408", "color": "white"});
	});
	$(".btn").mouseout(function(){
		$(this).css({"background": " linear-gradient( #c3aa5b, white)", "color": "black"});
	});
});
