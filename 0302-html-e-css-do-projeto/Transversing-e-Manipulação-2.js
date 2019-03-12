const Menu = document.querySelector('.menu');

menu.outerHTML; // Todo o HTML do elemento.
menu.innerHTML; // HTML interno.
menu.innerText; // Texto, sem tags.

menu.innerText = '<p>Texto</p>'; // A Tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // A Tag é renderizada 

const Lista = document.querySelector('.animais-lista')

Lista.parentElement; // Pai
Lista.parentElement.parentElement; // Pai do pai
Lista.previousElementSibling; // Elemento acima no HTML
Lista.previousSibling; // Node acima
Lista.nextElementSibling; // Elemento abaixo

Lista.children; // HTMLCollection com os filhos
Lista.children[0]; // Primeiro filho da HTML Collection
Lista.children[--lista.chidren.length]; // Último filho da HTML Collection

Lista.firstChild; // Primeiro node child
lista.childNodes; // Todos os node child

lista.querySelectorAll('li'); // Todas as LI's
lista.querySelector('li:last-child') // Último filho


// Manipulando elementos

const lista = document.querySelector('.animais-lista');
const contato = documento.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // Coloca o elemento como ultimo filho
contato.insertBefore(lista, titulo); // Insere a lista antes de titulo
contato.removeChild(titulo); // Remove o titulo do contato
contato.replaceChild(lista, titulo) // Substitui titulo por lista

// Novos Elementos

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Titulo'
novoH1.classList.add('titulo')

animais.appendChild(novoH1)

// Clonando elementos

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo; // Titulo, titulo2 e novo titulo são IGUAIS

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato')

contato.appendChild(cloneTitulo)

