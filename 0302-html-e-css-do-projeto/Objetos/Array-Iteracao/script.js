// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((element) => {
  const titulo = element.querySelector('h1').innerText;
  const descricao = element.querySelector('p').innerText;
  const aulas = element.querySelector('.aulas').innerText;
  const horas = element.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
});

console.log(objetosCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const biggerThanHundred = numeros.filter(n => n > 100);
console.log(biggerThanHundred);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some((element) => {
  return element === 'Baixo'
});
console.log(temBaixo)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulator, element) => {
  let precoLimpo = +element.preco.replace('R$', '').replace(',', '.');
  return acumulator + precoLimpo
}, 0);