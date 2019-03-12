// Number Methods
console.log('isNaN')
console.log(Number.isNaN(NaN)); // Retorna true
console.log(Number.isNaN(5)); // Retorna false

console.log('\nisInteger')
console.log(Number.isInteger(20)); // Sim, por ser inteiro.
console.log(Number.isInteger(20.5)); // Por não ser uma integral;


// ParseFloat retorna um número a partir de uma string
// a string DEVE começar com um número

console.log('\nparseFloat e parseInt')
console.log('parseFloat')
console.log(parseFloat('99.50')); // Mesma função sem o Number
console.log(Number.parseFloat('99.50')); // Retorna 99.5
console.log(Number.parseFloat('100 Reais')); // Retorna 100
// Por não começar com número, retorna NaN;
console.log(Number.parseFloat('R$ 100')); // NaN

// ParseInt recebe tambem um segundo parâmetro que é o Radix, 
// 10 é para decimal.
console.log('\nparseInt')

console.log(parseInt('99.49', 10)); // 99
console.log(parseInt(5.43443434344, 10)); // 5

// Metodos relacionados um valor armazenado
// n.toFixed
// Arredonda o número com base no total de casas decimais
console.log('\nn.toFixed')
const preco = 2.99;
console.log(preco.toFixed()); // 3;

const carro = 1000.455;
console.log(carro.toFixed(2)) // 1000.46

const preco2 = 1499.49; // Acima de 50, ele arredonda pra cima. Abaixo de 50, arredonda pra baixo.
console.log(preco2.toFixed()); // 1499;

// n.toString
// Transforma um número numa String, podendo usar Radix também
// Lembrando que o Radix padrão é 10 (decimal)
console.log('\nn.toString')
const preco3 = 2.99;
console.log(preco3.toString(10)); // '2.99'

// n.toLocaleString(lang, options);
// Transforma o número em valor de moeda local;
console.log('\nn.toLocaleString');
const precoLocale = 1000;
console.log(precoLocale.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log(precoLocale.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));


// Objeto MATH (Não é um construtor)
// Possui propriedades e métodos
console.log('\nObjeto Math')
console.log('abs, ceil, floor e round')
console.log(Math.PI);

// abs retorna o valor absoluto, ou seja, transforma negativo em positivo
console.log(Math.abs(-5.5)); // 5.5
// ceil arredonda para cima retornando sempre uma integral
console.log(Math.ceil(4.8384)); // 5
console.log(Math.ceil(4.3)); // 5
// floor arrendonda sempre para baixo, também sempre retornando uma integral
console.log(Math.floor(4.8384));
console.log(Math.floor(4.3));
// round arredonda para o número integral mais proximo
console.log(Math.round(4.8384));
console.log(Math.round(4.3));

console.log('\nmax, min, random')
console.log(Math.max(5, 3, 4, 6, 42, 10));
console.log(Math.min(5, 3, 4, 6, 42, 10));

console.log(Math.random()); // Retorna um número random (0.XXX);
console.log(Math.floor(Math.random() * 100)); // Retorna um número entre 0 e 100;
console.log(Math.floor(Math.random() * 500)); // Retorna um número entre 0 e 500;

// Número random entre 72 e 32
console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);

// Retornando um valor entre variaveis
let max = 100;
let min = 40;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);







