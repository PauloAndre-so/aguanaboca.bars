/*ativando o menu molile*/

function mostraMenu() {
  $('header nav#nav-esq ul#menu-principal')
    .stop(true, true)
    .slideDown(400) // abre suavemente em 0.4s
    .addClass('animate__animated animate__fadeInRight animate__slow');

  $('header nav#nav-esq ul#icone-menu li#menu').hide();
  $('header nav#nav-esq ul#icone-menu li#menuX').show();
}

function esconderMenu() {
  $('header nav#nav-esq ul#menu-principal')
    .stop(true, true)
    .slideUp(400); // fecha suavemente em 0.4s

  $('header nav#nav-esq ul#icone-menu li#menu').show();
  $('header nav#nav-esq ul#icone-menu li#menuX').hide();
}

let controle = true;

$('header nav#nav-esq ul#icone-menu').click(function() {
  if (controle) {
    mostraMenu();
    controle = false;
  } else {
    esconderMenu();
    controle = true;
  }
});

