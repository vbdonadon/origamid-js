// Todo objeto é criado com o construtor Object e por isso 
// herda as propriedades e métodos do seu prototype.
// const pessoa = new Object({
//   nome: 'André',
//   idade: 28,
// });

// const carro = {
//     marca: 'Marca',
//     rodas: 4,
//     acelerar() {
//         return this.marca + ' acelerou.';
//     },
//     buzinar() {
//         return this.marca + ' buzinou'
//     }
// }

// Uma idéia que eu estava pensando, seria criar um objeto genérico com as
// propriedas e métodos genéricos para todos os objetos que serão utilizados.
// Dessa forma, o objeto carro vai fazer de todo o protótipo de honda
// const honda = Object.create(carro);
// honda.marca = 'Honda';

// Object.create(obj, defineProperties) retorna um novo objeto que terá como 
// protótipo o objeto do primeiro argumento.
// const carro = {
//     rodas: 4,
//     init(marca) {
//         this.marca = marca;
//         return this;
//     },
//     acelerar() {
//         return `${this.marca} acelerou as ${this.rodas} rodas.`;
//     },
//     buzinar() {
//         return `${this.marca} buzinou.`
//     }
// }

// const honda = Object.create(carro);
// console.log(honda.init('Honda').acelerar());

// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos
// enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
// const funcaoAutomovel = {
//     acelerar() {
//         return 'acelerou';
//     },
//     buzinar() {
//         return 'buzinou';
//     },
// }

// const moto = {
//     rodas: 2,
//     capacete: true,
// }

// const carro1 = {
//     rodas: 4,
//     mala: true,
// }

// Isso é basicamente dizendo que, na moto e no carro você quer adicionar a
// funcaoAutomovel dentro do objeto. Outra coisa importante é que caso você vá
// cadenciando as funcoes que serão adicionadas, caso haja um campo igual, ele 
// sobrescreverá o valor.
// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro1, funcaoAutomovel);

// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades.
// A diferença aqui é a possibilidade de serem definidas as características dessas
// propriedades.
// const moto = {}
// Object.defineProperties(moto, {
//     rodas: {
//         value: 2,
//         // Por padrão, essas configurações já vem como false
//         configurable: false, // Impede deletar e mudança de valor
//         enumerable: true, // Torna enumerável 
//     },
//     capacete: {
//         value: true,
//         configurable: true,
//         writable: false, // Impede mudança de valor (Caso true, deixa possivel a mudança de valores)
//     }
// });

// Existem mais dois além de: 'value, configurable, enumerable e writable'. 
// Os outros dois são, get e set, é possivel definirmos diferentes comportamentos
// para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade
// obj.propriedade, a função get é ativada e ao setarmos obj.propriedade = 'valor'
// a função set é ativada
const moto = {}
Object.defineProperties(moto, {
    rodas: {
        // Quando temos get e set, não podemos ter o value
        get() {
            return this._rodas; // Pegue o número passado
        },
        set(valor) {
            this._rodas = valor * 4 + ' Total Rodas'; // Retorna o número passado * 4
        }
    }
})
