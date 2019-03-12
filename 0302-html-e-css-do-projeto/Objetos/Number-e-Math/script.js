// Retorne um número aleatório
// entre 1050 e 2000
let min = 1050;
let max = 2000;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Retorne o maior número da lista
let numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
var valor = 0;
arrayNumeros.forEach(element => {
    element = Number.parseInt(element); // Transforma String em Number
    if(valor < element){
        valor = element;
    }
});
console.log(valor)

// Hoje podemos fazer com o operador Spread (...), é como se ele fizesse
// um for each no array. Ou seja, passasse cada item para verificar, 
// que acaba facilitando muito.
// O código acima, se torna isso:
const spreadMax = Math.max(...arrayNumeros)
console.log(spreadMax)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total;
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230', 'r$  200'];
let valorFinal = 0;
function limparPreco(preco) {
    // Transforma para UpperCase, remove os R$, remove os espaços em branco
    // e troca virgula em ponto 
    // OBS: Colocar o + na frente somente para transforma em numero
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

listaPrecos.forEach((element) => {
    valorFinal += limparPreco(element);
});

console.log(valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
