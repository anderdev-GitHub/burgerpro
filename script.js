const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');

let myLi = ''

const showAll = () => {
    menuOptions.forEach((product) => {
        myLi += `
            <li>
                <img class="hamburgueres" src=${product.src}>
                <p>${product.name}</p>
                <p class="hamburguer-price">R$ ${product.price}</p>
            </li>
            `
    });

    list.innerHTML = myLi
}

buttonShowAll.addEventListener('click', showAll);