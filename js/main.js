import {openMn, closeMn} from './menu_phone.js';
import {showButtons, showMenu, closeMenu} from './menu.js';
import {scrollCard} from './script.js';
import{catalog, productCardRender} from './shopping_bag/catalog.js';
import{Basket} from './shopping_bag/main_basket.js';



openMn();
closeMn();

showMenu();
closeMenu();
showButtons();

scrollCard();

//_________________Зарисовка карточек в теле шаблона________________//

let productRolls = document.querySelector('.cards_of_rolls_section');
productRolls.innerHTML = productCardRender(catalog);

let productSushi = document.querySelector('.cards_of_sushi_section');
productSushi.innerHTML = productCardRender(catalog);

let productPoke = document.querySelector('.cards_of_poke_section');
productPoke.innerHTML = productCardRender(catalog);



//________________________КОРЗИНА___________________________//


let basket = new Basket();

let addProduct = document.querySelectorAll('.inform_newprice');
if (addProduct && addProduct.length > 0) {
    addProduct.forEach(product => {
        product.addEventListener('click', function (e) {
            basket.addProductToBasket(e.target.id);
        });
    });
}

basket.renderShowBasket();
let ButtnBag = document.querySelector('.count_product');
let shoppingList = document.querySelector('.basket_show');

ButtnBag.addEventListener('click', function(){
    shoppingList.classList.toggle('basket_show');   
});

let bascketlist = document.querySelector('.bascket_style');
if(bascketlist){
    bascketlist.addEventListener('click', function(e){
        if(e.target.classList.contains('rmv_product')) {
            basket.removeProductFromBasket(e.target.id);
        }
    })
}
