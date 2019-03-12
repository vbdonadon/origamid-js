// Cria uma função construtora de pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const Vinicius = new Pessoa('Vinicius', 'Bium Donadon', 23)

// Liste todos os métodos acessados por 
// dados criados com NodeList, HTMLCollection, Document
NodeList.prototype
HTMLCollection.prototype
Document.prototype

// Liste os construtores de dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Não é nada, pois não há constructor de Null ou Undefined

// Qual o construtor do dado abaixo;
li.hidden.constructor.name; // String

