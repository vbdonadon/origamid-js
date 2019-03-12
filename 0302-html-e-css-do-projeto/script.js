// Duplique o menu e adicione ele em copy
const Menu = document.querySelector('.menu');
const Copy = document.querySelector('.copy');

const CopiaMenu = Menu.cloneNode(true)
Copy.appendChild(CopiaMenu)

// Selecione o primeiro DT da DL de FAQ
const FAQ = document.querySelector('.faq dl');
const DT = FAQ.firstElementChild

// Selecione o DD referente ao primeiro DT
const DD = DT.nextElementSibling;

// Substitua o conteúdo HTML de .FAQ pelo de .ANIMAIS
const Animals = document.querySelector('.animais')
faq.innerText = animais.innerHTML;