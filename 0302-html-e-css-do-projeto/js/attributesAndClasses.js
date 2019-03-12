// Adicione as classes ativo a todos os itens do menu
// LEMBRAR SEMPRE QUE PODEMOS SELECIONAR QUERYSELECTOR COMO SE FOSSE CSS
let menu = document.querySelectorAll('.menu a');
menu.forEach((element) => {
    addClassMenu = element.classList.add('ativo')
    console.log(element)
})

// Remova a classe ativo de todos os itens do menu e mantenha apenas
// no primeiro
let primeiroMenu = document.querySelectorAll('.menu a');
primeiroMenu.forEach((element, index) => {
    element.classList.remove('ativo')
    if(index == 0){
        element.classList.add('ativo')
    }
})

// Verifique se todas as imagens possuem os atributos alt
let allImg = document.querySelectorAll('img');
allImg.forEach((element, index) => {
    console.log(`
Imagem: ${index}
Alt: ${element.hasAttribute('alt')}`)
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'https://www.google.com.br')