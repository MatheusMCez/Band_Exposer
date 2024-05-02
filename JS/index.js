var audioAtual = null;

$(function() {
  $(".about_banda").slideUp();
  $("#menu_categorias").slideUp();
});

/* -------------- SWIPER JS ------------------  */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,

  /*pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },*/

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    990: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

/* -------------- MOSTRAR MENU CATEGORIAS ------------------  */
$(".categorias").on("mouseover", function() {
  $("#menu_categorias").slideDown();
});

$("#menu_categorias").on("mouseleave", function() {
  $("#menu_categorias").slideUp();
});

$(".head_container").on("mouseover", function() {
  $("#menu_categorias").slideUp();
});


/* -------------- DETECTAR IMAGEM CLICADA ------------------  */
$(".img_bands").on("click", function() {
  var idBand = $(this).attr("id");
  exibeInfos(idBand);
  imgAnimation(idBand);

  $(".play_icon").on("click", function() {
    if (audioAtual === null) {
      $(".play_icon").fadeIn(100).fadeOut(500).fadeIn(100);
      reproduzMusica(idBand);
    }
    else {
      $(".play_icon").fadeIn(100).fadeOut(500).fadeIn(100);
      audioAtual.pause();
      audioAtual = null;
    }
    
  });

});

/* -------------- FUNÇÃO PARA SELECIONAR BANDA ------------------  */
function exibeInfos(id_band){

  var bandSelected = id_band

  switch (bandSelected) {
    case 'b_met':
      $(".about_banda").slideUp();
      if ($('.ab_metallica').is(':visible')){
        $(".ab_metallica").slideUp();
      } else {
        $(".ab_metallica").slideDown();
      }
      break;

    case 'b_gho':
      $(".about_banda").slideUp();
      if ($('.ab_ghost').is(':visible')){
        $(".ab_ghost").slideUp();
      } else {
        $(".ab_ghost").slideDown();
      }
      break;

    case 'b_mas':
      $(".about_banda").slideUp();
      if ($('.ab_mastodon').is(':visible')){
        $(".ab_mastodon").slideUp();
      } else {
        $(".ab_mastodon").slideDown();
      }
      break;

    case 'b_mis':
      $(".about_banda").slideUp();
      if ($('.ab_misfits').is(':visible')){
        $(".ab_misfits").slideUp();
      } else {
        $(".ab_misfits").slideDown();
      }
      break;

    case 'b_blu':
      $(".about_banda").slideUp();
      if ($('.ab_BOC').is(':visible')){
        $(".ab_BOC").slideUp();
      } else {
        $(".ab_BOC").slideDown();
      }
      break;
      
    case 'b_goj':
      $(".about_banda").slideUp();
      if ($('.ab_gojira').is(':visible')){
        $(".ab_gojira").slideUp();
      } else {
        $(".ab_gojira").slideDown();
      }
      break;

    case 'b_lim':
      $(".about_banda").slideUp();
      if ($('.ab_limpbiz').is(':visible')){
        $(".ab_limpbiz").slideUp();
      } else {
        $(".ab_limpbiz").slideDown();
      }
      break;

    case 'b_mus':
      $(".about_banda").slideUp();
      if ($('.ab_mushroom').is(':visible')){
        $(".ab_mushroom").slideUp();
      } else {
        $(".ab_mushroom").slideDown();
      }
      break;

    case 'b_sui':
      $(".about_banda").slideUp();
      if ($('.ab_suicidal').is(':visible')){
        $(".ab_suicidal").slideUp();
      } else {
        $(".ab_suicidal").slideDown();
      }
      break;

    case 'b_tri':
      $(".about_banda").slideUp();
      if ($('.ab_trivium').is(':visible')){
        $(".ab_trivium").slideUp();
      } else {
        $(".ab_trivium").slideDown();
      }
      break;

    case 'b_zea':
      $(".about_banda").slideUp();
      if ($('.ab_zeal').is(':visible')){
        $(".ab_zeal").slideUp();
      } else {
        $(".ab_zeal").slideDown();
      }
      break;

    case 'b_tur':
      $(".about_banda").slideUp();
      if ($('.ab_turn').is(':visible')){
        $(".ab_turn").slideUp();
      } else {
        $(".ab_turn").slideDown();
      }
      break;

      case 'b_bae':
      $(".about_banda").slideUp();
      if ($('.ab_baest').is(':visible')){
        $(".ab_baest").slideUp();
      } else {
        $(".ab_baest").slideDown();
      }
      break;

      case 'b_bes':
      $(".about_banda").slideUp();
      if ($('.ab_beastie').is(':visible')){
        $(".ab_beastie").slideUp();
      } else {
        $(".ab_beastie").slideDown();
      }
      break;

      case 'b_ccr':
        $(".about_banda").slideUp();
        if ($('.ab_creedence').is(':visible')){
          $(".ab_creedence").slideUp();
        } else {
          $(".ab_creedence").slideDown();
        }
        break;

    default:
      console.log('A banda ' + bandSelected + ' não foi definida')
  }

}

/* -------------- ANIMAÇÃO DE IMAGEM CLICADA ------------------  */
function imgAnimation(id_atual){
  var imgClicada = $("#" + id_atual);
  imgClicada.addClass("band_pressed")

  setTimeout(function () {
    imgClicada.removeClass("band_pressed")
  }, 250)

  $(".img_bands").removeClass("actual_band pulse")
  imgClicada.addClass("actual_band pulse")


}

/* -------------- REPRODUZIR A MÚSICA ------------------  */
function reproduzMusica(id_band){
  var banda_Musica = id_band; 

  switch (banda_Musica) {

    case 'b_met':

      var musMettalica = new Audio('music/Met_Cre.mp3');
      musMettalica.play();
      audioAtual = musMettalica;
      break;

    case 'b_gho':

      var musGhost = new Audio('music/Gho_Sta.mp3');
      musGhost.play();
      audioAtual = musGhost;
      break;

    case 'b_mas':

      var musMast = new Audio('music/Mas_Onc.mp3');
      musMast.play();
      audioAtual = musMast;
      break;

    case 'b_mis':

      var musMisf = new Audio('music/Mis_Whe.mp3');
      musMisf.play();
      audioAtual = musMisf;
      break;

    case 'b_blu':

      var musBOC = new Audio('music/BOC_God.mp3');
      musBOC.play();
      audioAtual = musBOC;
      break;

    case 'b_goj':

      var musGojira = new Audio('music/Goj_Sil.mp3');
      musGojira.play();
      audioAtual = musGojira;
      break;

    case 'b_lim':

      var musLimp = new Audio('music/Lim_Myg.mp3');
      musLimp.play();
      audioAtual = musLimp;
      break;

    case 'b_mus':

      var musMush = new Audio('music/Mus_Wea.mp3');
      musMush.play();
      audioAtual = musMush;
      break;

    case 'b_sui':

      var musSuicidal = new Audio('music/Sui_Pos.mp3');
      musSuicidal.play();
      audioAtual = musSuicidal;
      break;

    case 'b_tri':

      var musTrivium = new Audio('music/Tri_Sev.mp3');
      musTrivium.play();
      audioAtual = musTrivium;
      break;

    case 'b_zea':

      var musZeal = new Audio('music/Zea_Got.mp3');
      musZeal.play();
      audioAtual = musZeal;
      break;

    case 'b_tur':

      var musTurn = new Audio('music/Tur_Faz.mp3');
      musTurn.play();
      audioAtual = musTurn;
      break;

    case 'b_bae':

      var musBaest = new Audio('music/Bae_Ecc.mp3');
      musBaest.play();
      audioAtual = musBaest;
      break;

    case 'b_bes':

      var musBestie = new Audio('music/Bea_Sow.mp3');
      musBestie.play();
      audioAtual = musBestie;
      break;

    case 'b_ccr':

      var musCCR = new Audio('music/Ccr_Run.mp3');
      musCCR.play();
      audioAtual = musCCR;
      break;


    default:
      console.log('A musica ' + banda_Musica + ' não foi definida')
  }
  
}  








  
  








    

