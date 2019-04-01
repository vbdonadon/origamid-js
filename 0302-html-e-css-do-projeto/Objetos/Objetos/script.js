// Crie uma função que verifique
// corretamente o tipo de dado
const typeOfData = function(data){
    return Object.prototype.toString.call(data);
}

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true,
    }
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}

Object.freeze(preventThis)
  
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
Object.getOwnPropertyNames(String.prototype);
Object.getOwnPropertyNames(Array.prototype);
