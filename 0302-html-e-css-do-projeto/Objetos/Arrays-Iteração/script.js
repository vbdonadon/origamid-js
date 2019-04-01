// Arrays Iteração
// [].forEach(callback(itemAtual, index, array)) a função
// de callback é executada para item da array. Ela possui
// três argumentos, itemAtual(valor do item da array), 
// index(index do valor na array) e array (a array original).
// o ForEach sempre retorna undefined
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
    console.log(item.toUpperCase());
});

// com Arrow Function
carros.forEach((item, index, array) => {
    console.log(item.toUpperCase());
});

// ARROW FUNCTION
const li = document.querySelectorAll('li');

// Mesma coisa com duas formas diferentes
li.forEach(i => i.classList.add('ativa'));
li.forEach(function(item) {
    item.classList.add('ativa');
});

/*
[].map(callback(item, index, array)) funciona da mesma
forma que o forEach(), porém ao invés de retornar undefined,
retorna uma nova array com valores atualizados de acordo 
com o return de cada iteração
*/
const carros1 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros.map((item) => {
    return 'Carros ' + item;
});

// [].map vs [].forEach
/**
 * Se o objetivo for modificar os valores da array atual,
 * sempre utilize o map, pois assim uma nova array com os
 * valores modificadores é retornada e você pode imediatamente
 * iterar novamente sobre os valores
 */

// Exemplo pratico de [].map() com objetos
/*
    Map pode ser muito util para interagirmos com uma array
    de objetos, onde desejamos isolar um valor unico de cada
    objeto.
*/
const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    }
]
let tempoAulas = aulas.map((item) => item.min);
console.log(tempoAulas);

const nomeAulas = (aula) => aula.nome;
const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas);
