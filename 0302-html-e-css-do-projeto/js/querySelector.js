// Pega um elemento pelo ID dele.
const animais = document.getElementById('animais')
console.log(animais);

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1]);

// Da mesma forma que a de cima, retorna o elemento onde contem AS DUAS classes.
//const contato = document.getElementsByClassName('grid-section contato')

// O .querySelector sempre retorna o primeiro elemento encontrado.
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

// Temos também o querySelectorAll que não é nada mais que o querySelector que 
// seleciona todos os elementos encontrados.
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index) {
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML); // Transformando ARRAYS like em Arrays.

arrayGrid.forEach(function(item){
    console.log(item);
});