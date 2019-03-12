// String
// É a construtora de Strings, toda string possui as propriedades
// e métodos do prototype de String 
const comida = 'Pizza';
const agua = new String('Agua');

comida.length // Retorna a quantidade de caracteres da String = 5
comida[0] // Retorna P
comida.length - 1 // Acessa o ultimo item do array, no caso = A

// Também podemos usar o charAt, que funcionaria da mesma forma
comida.charAt(0); // P
comida.charAt(2)  // z
comida.charAt(comida.length - 1) // a

// Concatenando Strings
const frase = "A melhor linguagem é ";
const linguagem = "JavaScript"

// As duas tem o mesmo resultado
const fraseFinal = frase.concat(linguagem, '!!') // podemos continuar concatenando com virgula
const fraseFinal2 = frase + linguagem;

// Método includes, endsWith e startsWith
const fruta = "Banana";
const listaFruta = "Melancia, Banana, Laranja";

listaFruta.includes(fruta) // Retorna true
fruta.includes(listaFruta) // Retorna false
listaFruta.includes(fruta, 14) // Retorna false, pois o 14 é a posição de onde começa a procurar.
fruta.endsWith('nana') // Retorna true
fruta.startsWith('Bana') // Retorna true
fruta.endsWith('Ba') // retorna False
fruta.startsWith('nana') // retorna false

// Método slice
// O método substring funciona da mesma forma, só que não trabalha
// bem com valores negativos nas posições
const transacao1 = "Depósito de cliente"
const transacao2 = "Depósito de fornecedor"
const transacao3 = "Taxa de camisas"

transacao1.slice(0, 3) // Retorna Dep
transacao2.slice(1, 3) // Retorna epó
transacao3.slice(0, 3) // Retorna Tax
transacao3.slice(0, -1) // Corta somente o ultimo caracter
transacao3.slice(-3) // Retorna as 3 ultimas letras
transacao3.slice(11) // Corta os 12 primeiros e imprime o resto. Conta espaços.

// indexOf e lastIndexOf
const JS = 'JavaScript'
JS.indexOf('J') // Retorna o index 0
JS.indexOf('a') // Retorna o index do PRIMEIRO 1
JS.indexOf('pt') // Retorna o index 8, que é onde começa a string

// Last index of varre da esquerda pra direita e acha o primeiro nesse sentido
JS.lastIndexOf('a') // Retorna 3


// padStart e padEnd
// O padStart aumenta o tamanho da String, por exemplo, se a String tiver 5
// caracteres e você quiser aumenta-lá para 10, ele irá adicionar 5 caracteres
// a mais que você definirá após a quantidade, caso você não passe o parametro,
// ele adicionará espaços em branco. O padEnd faz a mesma coisa, só que
// no sentido contrario
const listaPreco = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPreco.forEach((preco) => {
    console.log(preco.padStart(10, '.'))
})

listaPreco.forEach((preco) => {
    console.log(preco.padEnd(10, 'ha'))
})

// Repeat - Repete a String
JS.repeat(3) // Retorna a string armazenada em JS 3 vezes

// Replace 
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias'
listaItens = listaItens.replace('Camisas', 'Shirts')
// Utilizando o RegExp e replace, nós adicionamos virgulas nos
// espaços.
listaItens = listaItens.replace(/[ ]+/g, ', ')

let preco = 'R$ 1200,43'
preco = preco.replace(',', '.'); // R$ 1200.43

// Split - Separa uma string e transforma em uma array
const arrayLista = listaItens.split(', ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')

console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
frutasArray.join('') // Junta a array em uma String
frutasArray.join('a') // Junta a array em uma String e adiciona o 'a'
// no final de cada item

// Trim()
const valor = '  R$ 23.00   '
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '   R$ 23.00'




