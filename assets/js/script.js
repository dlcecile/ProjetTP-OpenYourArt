// ** DEBUT CARROUSSEL **
  setInterval(function () {
    // RECUPERE LA LARGEUR D'UN LI DANS NOTRE CARROUSEL (MARGES COMPRISES)
    let taille = $('#carrousel li').outerWidth(true);
    // RECULE LE UL VERS LA GAUCHE DE LA TAILLE D'UN LI
    $('#carrousel ul').animate({
      marginLeft: -taille
    }, 2000, function () {
      // SELECTIONNE ENSUITE LE PREMIER LI ET LE PLACE APRES LE DERNIER LI POUR CREER UN CAROUSSEL INFINI
      $(this).css({
        marginLeft: 0
      }).find('li:last').after($(this).find('li:first'));
    })
  }, 6000);
  // ** FIN CARROUSSEL **
