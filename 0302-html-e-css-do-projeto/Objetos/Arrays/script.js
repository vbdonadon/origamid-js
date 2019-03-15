const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variavel
let primeiroValor = comidas.shift();
console.log(primeiroValor);
// Remova o último valor de comidas e coloque em uma variavel
let ultimoValor = comidas.pop();
console.log(ultimoValor);
// Adicione 'Arroz' ao final da array
comidas.push('Arroz');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
estudantes.includes('Joana');
console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `
            <section>
            <div>Sobre</div>
            <div>Produtos</div>
            <div>Contato</div>
            </section>
           `
// Substitua section por ul e div com li, utilizando
// split e join
html = html.split('section').join('ul');
html = html.split('div').join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remove o último carro, mas antes de remover salve
// a array original em outra variavel
let novoCarros = [].concat(carros);
