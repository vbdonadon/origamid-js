// Prototype está SEMRPE ligado a uma função e é um prototipo dela
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.abracar = function(){
        return 'Abraçou'
    }
    this.andar = function() {
        return 'Andou pelo objeto'
    } // Mesmo havendo uma função no prototype com o mesmo objeto,
}     // ele primeiro busca na função, caso não haja ai ele usa o do prototype

const andre = new Pessoa('André', 28);

Pessoa.prototype.andar = function(){
    return this.nome + ' andou'
}

Pessoa.prototype.nadou = function(){
    return this.nome + ' nadou'
}

// console.log(Pessoa.prototype); // retorna um objeto da função
// console.log(andre.prototype) // retorna undefined

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo ']
const lista = document.querySelectorAll('li');

//Transforma em uma array
const listaArray = Array.prototype.slice.call(lista) // 
// Ou podemos usar
const listaArrayFrom = Array.from(lista)


const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar(){
        return true;
    }
}
// O construtor está sempre referenciado ao retorno do que você 
// está chamando, como no exemplo abaixo
Carro.andar.constructor.name // Retorna o construtor function, por que não foi executada
Carro.andar().constructor.name // Retorna o construtor Boolean
Carro.preco.constructor.name // Retorna o construtor Number
Carro.marca.constructor.name // Retorna o construtor String

