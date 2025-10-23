// açoes de navegacao hader-nav-menu
$(document).ready(function() {
  // ===== MENU TOPO =====
  $('header nav#nav-esq ul#menu-principal li:eq(0)').click(function() {
    $('html, body').animate({ scrollTop: $('header').offset().top }, 1000);
  });

  $('header nav#nav-esq ul#menu-principal li:eq(1)').click(function() {
    $('html, body').animate({ scrollTop: $('section.sobre').offset().top }, 1000);
  });

  $('header nav#nav-esq ul#menu-principal li:eq(2)').click(function() {
    $('html, body').animate({ scrollTop: $('section.cardapio').offset().top }, 1000);
  });

  $('header nav#nav-esq ul#menu-principal li:eq(3)').click(function() {
    $('html, body').animate({ scrollTop: $('section.produto').offset().top }, 1000);
  });

  $('header nav#nav-esq ul#menu-principal li:eq(4)').click(function() {
    $('html, body').animate({ scrollTop: $(document).height() }, 1000);
  });



// açoes de navegacao footer
// ===== MENU DO FOOTER =====
$('footer div.footer-container nav.nav-footer ul#menu-principal li:eq(0)').click(function() {
  $('html, body').animate({ scrollTop: $('header').offset().top }, 1000);
});

$('footer div.footer-container nav.nav-footer ul#menu-principal li:eq(1)').click(function() {
  $('html, body').animate({ scrollTop: $('section.sobre').offset().top }, 1000);
});

$('footer div.footer-container nav.nav-footer ul#menu-principal li:eq(2)').click(function() {
  $('html, body').animate({ scrollTop: $('section.cardapio').offset().top }, 1000);
});

$('footer div.footer-container nav.nav-footer ul#menu-principal li:eq(3)').click(function() {
  $('html, body').animate({ scrollTop: $('section.produto').offset().top }, 1000);
});

// CONTATO → vai pro final da página
$('footer div.footer-container nav.nav-footer ul#menu-principal li:eq(4)').click(function() {
  $('html, body').animate({ scrollTop: $(document).height() }, 1000);
});

/*--------------------------*/
/*   SECTION SOBRE          */
/*--------------------------*/

//elementos com opacidade 0
$('div.sobre-mestre').css('opacity',0);

$('div.sobre-mestre').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.sobre-mestre').addClass('animate__animated animate__fadeInUp animate__slow');
    }else{
        $('div.sobre-mestre').removeClass('animate__animated animate__fadeInUp animate__slow');
    }
}, {
    offset:'300px'
})
});