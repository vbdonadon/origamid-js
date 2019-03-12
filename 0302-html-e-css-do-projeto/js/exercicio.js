// const listaAnimais = document.querySelector('.animais-lista');

// const heightDaLista = listaAnimais.clientHeight;
// const heightDaListaComScroll = listaAnimais.scrollHeight;

// const primeiroH2 = document.querySelector('h2');
// const h2left = primeiroH2.offsetLeft;

// const rect = primeiroH2.getBoundingClientRect();

// console.log(rect)

// Verifique a distância da primeira imagem em relação ao topo da página
const firstImage = document.querySelector('img');

let firstImageToTop = firstImage.offsetTop;
console.log(firstImageToTop)

// Retorna a soma da largura de todos as imagens
const allImages = document.querySelectorAll('img')
let eachImg = 0;
window.onload = function(){
    allImages.forEach((element) => {
        let imgValue = element.offsetWidth;
        eachImg = eachImg + imgValue;
    });
    console.log(eachImg)
}



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o Google)
const links = document.querySelectorAll('a');
links.forEach((element) => {
    console.log(element)
    let dimensions = element.getBoundingClientRect();
    if ((dimensions.height < 48) && (dimensions.width < 48)){
        console.log('É menor')
    } else {
        console.log('É maior')
    } 
}) // Esse teste está errado, mas foi só para testar o getBounding

// Se o browser for menor que 720px
// adicione a classe menu-mobile ao menu
const browserWidth = window.innerWidth;
if (browserWidth < 720){
    let menuMobile = document.querySelector('.menu');
    menuMobile.classList.add('menu-mobile')
}