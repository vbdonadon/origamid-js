// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.firstChild.length
}, 0);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criaElemento(tag, classe, content) {
    const element = document.createElement(tag);
    classe ? element.classList.add(classe) : null;
    content ? element.innerHTML = content : null;
    return element;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1TitleContent = criaElemento.bind(null, 'h1', 'titulo');