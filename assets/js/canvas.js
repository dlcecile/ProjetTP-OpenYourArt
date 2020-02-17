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
