var imagem1Slide3 = document.querySelectorAll(".slide3 .slide3_foto1");
var imagem2Slide3 = document.querySelectorAll(".slide3 .slide3_foto2");
var troca1 = 0;
var troca2 = 0;

function trocaImagem1(){

  imagem1Slide3[troca1].classList.remove("ativa1");
  troca1++;
  if(troca1 == 4){troca1 = 0;}
  imagem1Slide3[troca1].classList.add("ativa1");

}
setInterval(trocaImagem1,2000);

function trocaImagem2(){

  imagem2Slide3[troca2].classList.remove("ativa2");
  troca2++;
  if(troca2 == 2){troca2 = 0;}
  imagem2Slide3[troca2].classList.add("ativa2");

}
setInterval(trocaImagem2,3000);
