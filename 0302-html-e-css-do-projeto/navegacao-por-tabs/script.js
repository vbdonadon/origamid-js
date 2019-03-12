const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
tabContent[0].classList.add('ativo')

function activeTab(index){
    tabContent.forEach((element) => {
        element.classList.remove('ativo')
    });
    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((element, index) => {
    element.addEventListener('click', () => {   
        activeTab(index);
    });
});

console.log(tabMenu)
console.log(tabContent)