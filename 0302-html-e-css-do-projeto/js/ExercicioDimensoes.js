// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img')
const imgTop = img.offsetTop
console.log(imgTop)


// Retorne a soma da largura de todas as imagens
const TodasImagens =  document.querySelectorAll('img')
let soma = 0;
function somaImagens(){
    TodasImagens.forEach((element) => {
        soma = soma + element.offsetWidth;
    });
    console.log(soma)
}

window.onload = function() { // 
    somaImagens();
}

// Verifique se os links da página possuem o minimo
// recomendado para telas utilizadas com o dedo
// (48px/48px de acordo com o Google)
const links = document.querySelectorAll('a')
links.forEach((element) => {
    const linkWidth = element.offsetWidth
    const linkHeight = element.offsetHeight
    if(linkWidth >= 48 && linkHeight >= 48){
        console.log('Possuem boa acessibilidade')
    } else {
        console.log('Não possuem boa acessibilidade')
    }
})

// Se o browser for menor que 720px
// adicione a classe menu-mobile

cos