const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [45, 99, 69, 89];

const dados = [
    new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], 
    function andar(nome){ console.log(nome) }
]

dados[2]('Ford');
console.log(dados[1][2].cor);

const carros = new Array('Corola', 'Mustang', 'Honda');
console.log(carros[1]); // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const obj = {
    0: 'Vinicius',
    1: 'Bium',
    2: 'Donadon',
    length: 3
}

const objArray = Array.from(obj);
console.log(Array.isArray(objArray));

// Array.of cria uma array com os itens passados
// por parametro
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1, 2, 3, 4];
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4) // [1, 2, 3, 4]

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2

// Modificadores de Array .sort()
// Além de retornar um valor, eles modificam a
// array original. o .sort organizado pelo unicode
const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos1.sort();
console.log(instrumentos1);

const idades = [32,21,33,43,1,12,8];
idades.sort();
console.log(idades);

// [].unshift() adiciona elementos ao inicio do array
// e retorna o length da mesma
// [].push() adiciona elementos ao final da array e retorna
// o length da mesma
// O return da length acontece quando ele é "invocada" ou usa o console nela
const carros1 = ['Ford', 'Fiat', 'VW'];
carros1.unshift('Honda', 'Kia'); // 5
carros1.push('Ferrari'); // 6
console.log(carros1); 

// [].shift() remove o primeiro elemento da array
// [].pop() remove o último elemento da array
// o retorno das duas funções é o item que eles removeram
const primeiroCarro = carros1.shift(); // Honda
const ultimoCarro = carros1.pop(); // Ferrari
console.log(carros1); 

// [].reverse inverte os itens da array e retorna a nova array
// e retorna a nova array invertida
console.log(carros1.reverse());