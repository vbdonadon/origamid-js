/* 
[].splice(index, remove, item1, item2, ...) adiciona valores
na array a partir do index. Remove a quantidade de itens que 
for passada no segundo parâmetro (retorna esses itens).
*/
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // []
console.log(carros);

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
console.log(carros);


/*
[].copyWithin(alvo, inicio, final); a partir do alvo, ele irá copiar
a array começando do inicio até o final e vai preencher a mesma com 
essa cópia. Caso omita os valores de inicio e final, ele irá utilizar
como inicio o 0 e final o valor total da array
*/

console.log(['Item1','Item2','Item3','Item4', 'Item5', 'Item6'].copyWithin(2,0,3));

// Com valores negativos, a array começa do fim
console.log(['Item1','Item2','Item3','Item4'].copyWithin(-1));

/*
[].fill(valor, inicio, final)
preenche a array com o valor, do inicio até o fim;
*/
['Item1','Item2','Item3','Item4'].fill('Banana');
// ['Banana','Banana','Banana','Banana'];

['Item1','Item2','Item3','Item4'].fill('Banana', 2);
// ['Item1','Item2','Banana','Banana']

['Item1','Item2','Item3','Item4'].fill('Banana', 1, 3);
// ['Item1','Banana','Banana','Item4']


/*
Métodos de Acesso
[].concat() Os métodos abaixo não modificam a array original, apenas retornam
uma array modificada. [].concat() irá concatenar a array com o valor passado.
*/
const transporte1 = ['Barco', 'Avião'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Avião', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Avião', 'Carro', 'Moto', 'Van'];


/* 
[].includes(valor) verifica se a array possui o valor e retorna true or false;
[].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro
valor na array. [].lastIndexOf retorna o index do ultimo item
*/
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5


/*
[].join(separator) junta todos os valores da array e retorna uma string com eles.
Se você passar um valor como parâmetro, este será utilizado durante a junção de 
cada item da array
*/
const linguagens1 = ['html', 'css', 'js', 'php', 'python', 'js'];
linguagens.join(); // 'htmlcssjsphppythonjs'
linguagens.join(' '); // 'html css js php python js'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python-_-js'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>'];
htmlString = htmlString.join('h1');
// '<h1>Título Principal</h1>'

/*
[].slice(inicio, fim) retorna os itens da array começando pelo inicio e indo até o
valor final
*/
const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python'];
linguagens.slice(1, 4); // ['css', 'js', 'php'];