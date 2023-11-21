const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');

const showAll = (productsArray) => {
    let myLi = ''

    productsArray.forEach((product) => {
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

const mapAllItems = () => {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // aplicando 10% desconto
    }));

    showAll(newPrices)
};

buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllItems);