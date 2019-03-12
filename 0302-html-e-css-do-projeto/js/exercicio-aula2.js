// Mostre no console cada parágrafo do site
pFromHTML = document.querySelectorAll('p');

pFromHTML.forEach((item) => {
    // console.log(item)
});

// Mostre o texto dos parágrafos no console.
pFromHTML.forEach(function(element, index, array){
    let pHtmlText = element.innerText;
    // console.log(pHtmlText)
});

Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
console.log(imgs)

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
})

imgs.forEach(() => i++)