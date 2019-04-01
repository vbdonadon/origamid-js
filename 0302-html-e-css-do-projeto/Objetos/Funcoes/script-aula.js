// const perimetro = new Function('lado', 'return lado * 4');
// // Function.length retorna o total de parametros da função
// // Function.name retorna uma string com o nome da função

// function somar(n1, n2){
//   return n1 + n2;
// }

// console.log(somar.length); // 2
// console.log(somar.name); // 'somar'

// // function.call(this, arg1, arg2, ...) executa a função, sendo 
// // possível passarmos uma nova referência ao this da mesma

// const carro = {
//   marca: 'Ford',
//   ano: 2018
// }

// function descricaoCarro(velocidade) {
//   // Utilizando desta forma, o this vira o objeto maximo do browser, que seria
//   // o window. Com o método .call(), podemos substituir o this.
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
// }

// descricaoCarro() // undefined undefined
// descricaoCarro.call() // undefined undefined
// // Importante: O primeiro parametro seria o novo this, já o segundo são os parametros
// // passados na função
// descricaoCarro.call(carro, 100) // Ford 2018 100

// // O valor de this faz referência ao objeto criado durante a construção do objeto 
// // (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().
// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];

// // IMPORTANTE: Caso mudemos o call() de carros para frutas, ele mudaria a referência do this
// // e faria um forEach() em frutas.
// carros.forEach.call(carros, (item) => {
//   console.log(item);
// });

// function Dom(seletor){
//   this.element = document.querySelector(seletor);
// }

// // Cria um protótipo da função que adiciona uma classe ao elemento.
// Dom.prototype.ativo = function(classe){
//   this.element.classList.add(classe)
// };

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativar');

// const ul = new Dom('ul');

// ul.ativo('ativo')
// ul.ativo.call(li, 'ativo')
// console.log(ul)

const frutas = ['Uva', 'Maçã', 'Banana']

// HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. 
// Por isso conseguimos utilizar os mesmos na substituição do this em call.
Array.prototype.pop.call(frutas);

// Isso é um objeto ArrayLike (Parecidos com um Array)
// Por exemplo, uma NodeList.
const ArrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3
}

// O filtro traz todos os elementos com a classe ativo.
const li = document.querySelectorAll('li');
const ArrayLi = Array.from(li);

const filtro = ArrayLi.filter((item) => {
  return item.classList.contains('ativo');
});

// Function.apply()
// O apply(this, [arg1, arg2, ...]) funciona como o call, a única dferença
// é que os argumentos da função são passados através de uma array.
// IMPORTANTE: Podemos passar NULL para o valor de this, caso a função utilize o objeto 
// principal para funcionar.
// Esse é um bom jeito de fazer a comparação com todos os números de uma array e verificar
// qual o maior.
const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);

// Apply vs Call
// Basicamente a única diferença é o Array como segundo argumento.
function itemPossuiAtivo(item){
  return item.classList.contains('ativo');
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo])

// Function.bind(this, arg1, arg2, ...) não irá executar a função, mas sim,
// retornar a mesma com o novo contexto de this.
const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
});

console.log(filtrarLi())

// Dessa forma o bind seleciona o Li, mas caso eu queira mudar isso, posso passar
// via parametro, nesse caso eu retiraria o Li e passaria por exemplo $('li');
const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`
  }
}

const honda = {
  marca: 'Honda'
}

const AcelerarHonda = carro.acelerar.bind(honda);
console.log(AcelerarHonda(100, 2));

// console.log(carro.acelerar(20, 5))

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6