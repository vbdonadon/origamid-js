// Pega todas as imagens do site;
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array){
//     // console.log(item)
// });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item){
//     // console.log(item)
// });

// Pega todas as imagens do site;
const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//     console.log(item)
// });


// Isso é a mesma coisa que a de baixo
let i = 0;
imgs.forEach((item) => console.log(i++));

imgs.forEach(function(item) {
    console.log(i++)
})