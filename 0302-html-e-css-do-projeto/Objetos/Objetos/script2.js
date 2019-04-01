// Object.getOwnPropertyDescriptors(obj)
// Lista todos os métodos e propriedades de um objeto com as suas devidas configurações

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades de Array;

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade as suas configurações

/*
OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)

Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. 
Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com 
array's contendo a chave e o valor.
*/

Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis.

const carro = {
    marca: 'Ford',
    ano: 2018
}

Object.keys(carro);
// ['marca', 'ano'];

Object.values(carro);
// ['Ford', 2018]

Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]]

/*
Object.getOwnPropertyNames(obj)
Retorna uma Array com todas as propriedades diretas do objeto (não retorna as do protótipo).
*/

Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', of];

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

Object.getOwnPropertyNames(carro);
// ['marca', 'ano'];

/*
Object.getPrototypeOf() e Object.is()
Object.getPrototypeOf(obj1, obj2) retorna o protótipo do objeto.
Object.is() verifica se os objetos são iguais e retorna true ou false
*/
const frutas = ['Banana', 'Pêra'];
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
const copiaFruta = frutas1;

Object.is(frutas1, frutas2); // false
Object.is(frutas1, copiaFruta); // true

/**
OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a 
adição de novas propriedades e impede que as atuais sejam deletadas. 
Object.preventExtensions() previne a adição de novas propriedades.
 */

Object.freeze(carro);
Object.seal(carro);
Object.preventExtensions(carro);

Object.isFrozen(carro); // true
Object.isSealed(carro); // true
Object.isExtensible(carro); // true