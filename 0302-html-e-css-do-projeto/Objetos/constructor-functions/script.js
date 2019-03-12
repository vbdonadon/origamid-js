// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar(){
//         console.log(this.nome + ' andou');
//     }
// }

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function(nome){
        console.log(this.nome + ' andou')
    }
}

// Crie 3 pessoas, João - 20 anos.
// Maria - 25 anos, Bruno - 15 anos.

const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do Dom. Deve conster as seguintes
// propriedades e métodos:

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todas os elementos

function ManipulaDom(elements){
    const elementList = document.querySelectorAll(elements)
    this.element = elementList
    this.addClass = function(classe){
        this.elementList.forEach((element) => {
            element.classList.add(classe)
        })    
    }
    this.removeClass = function(classe){
        this.elements.forEach((element) => {
            element.classList.remove(classe)
        })    
    }
}

const DomManipulado = new ManipulaDom('li');
DomManipulado.addClass('ativa');

