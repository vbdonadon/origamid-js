/*
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
Executa a função de callback para cada item da array. Um valor especial
existe nessa função de callback, ele é chamado de "acumulador", mas é 
na verdade apenas o retorno da iteração anterior
*/
const aulas1 = [10, 25, 30];
const reduceAulas = aulas1.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item);
    // Na primeira "iteracao", o acumulador tem como resultado 10, que é definido
    // no fim do reduce, nas próximas o valor dele é definido pelo retorno que a
    // função terá.
    return acumulador + item;
    // Note que agora, o acumulador sempre tem o valor do item da iteração passada;
    // PS: Caso passemos o return como acumulador, ele sempre retornará o valor setado
    // no fim, nesse caso o 10. Outra coisa é que, se passarmos essa mesma função, mas
    // com o valor final 0, ele retornará a soma da array;
}, 10);
    // IMPORTANTE: Caso não passemos o valor do acumulador no fim, ele pulará a primeira
    // iteração e assumirá que o valor do acumulador é o valor do primeiro item da array
console.log(reduceAulas);

// [].reduce não servirá somente para somar valores. Um exemplo seria utilizarmos o reduce
// para verificar o maior valor numa cadeia de valores, por exemplo: 
const numeros = [10, 25, 60, 5, 35, 10, 300];

const maiorValor = numeros.reduce((anterior, atual) => {
    return anterior < atual ? atual : anterior;
}, 0);

// Isso é a mesma coisa que a de cima, só que simplificado.
const maiorValorSimplificado = numeros.reduce((anterior, atual) => anterior < atual ? atual : anterior, 0);
console.log(maiorValor);

// Outras valores com reduce
const aulasReduce = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 25
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'CSS 1',
        min: 30
    },
    {
        nome: 'JS 1',
        min: 60
    },
]

const listaAulas = aulasReduce.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, {});

console.log(listaAulas);

// [].reduceRight() 
// A diferença é que este começa a iterar da direita para a esquerda, enquanto
// o reduce itera da esquerda para direita
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);
console.log(frutas);
console.log(frutasRight);
console.log(frutasLeft);

// [].some()
// [].some(), se pelo menos um return da iteracao for truthy, ele retorna true.
const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
});

function maiorQue100(numero){
    // Assim você pode criar uma função que seria a condição do .some()
    return numero > 100;
}

const numero = [0, 43, 22, 88, 101, 2];
const temMaior = numero.some(maiorQue100);
console.log(temMaior); 

// [].every 
// se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo 
// menos um for falsy, ele irá retornar false.
const frutas2 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// Está vazia '', o que é um valor falsy
const arraysCheia = frutas2.every((fruta) => {
    return fruta; // False
});
console.log(arraysCheia);

const numeros2 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros2.every(x => x > 3); // True
console.log(maiorQue3)

// [].find() e [].findIndex();
// [].find() retorna o valor atual da primeira iteração que retornar
// um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, 
// retornar o index deste valor na array.
// IMPORTANTE: Ele retornará sempre o PRIMEIRO valor truthy
const frutasFind = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutasFind.findIndex((fruta) => {
    return fruta === 'Uva';
}); // 2;

const numerosFind = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numerosFind.find(x => x > 45); // 88;

// [].filter()
// Retorna uma array com a lista de valores que
// durante a sua iteração retornaram um valor truthy.
const frutasFilter = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutasFilter.filter((frutas) => {
    return frutas;
}); // ['Banana', 'Uva', 'Maça'];

const numerosFilter = [6, 43, 22, 88, 101, 29];
const buscaMaior45Filter = numerosFilter.filter(x => x > 45) // [85, 101];