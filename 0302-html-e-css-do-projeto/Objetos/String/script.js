// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Taxa Cliente',
    valor: 'R$ 49',
  },
];

let finalValue = 0;

transacoes.forEach(element => {
    let onlyValue = element.valor.replace('R$ ', '')
    let toNumber = +onlyValue;
    finalValue = finalValue + toNumber;
});

console.log(finalValue)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';')
console.log(transportesArray)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlArray = html.split('span')
const novoHtml = htmlArray.join('a')
console.log(novoHtml)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
const lastChar = frase.length - 1
console.log(frase[lastChar])

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


 

