/**
PROPRIEDADES E MÉTODOS DO PROTÓTIPO
Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os 
objetos criados a partir de funções construtoras. {}.constructor retorna a função 
construtora do objeto.
*/

const frutas = ['Banana', 'Uva'];
frutas.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

/*
{}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
Verifica se possui a propriedade e retorna true. A propriedade deve ser direta
 do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
*/

frutas.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

/**
{}.isPrototypeOf(valor)
Verifica se é o protótipo do valor passado.
 */

Array.prototype.isPrototypeOf(frutas); // true

/*
{}.TOSTRING()
Retorna o tipo do objeto. O problema é toString() ser uma função dos 
protótipos de Array, String e mais. Por isso é comum utilizarmos a função 
direto do Object.prototype.toString.call(valor).
*/

frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

const frase1 = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]

const carro = {marca: 'Ford'};
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]