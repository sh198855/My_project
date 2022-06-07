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

let product_rolls = document.querySelector('.cards_of_rolls_section');
product_rolls.innerHTML = productCardRender(catalog);

let product_sushi = document.querySelector('.cards_of_sushi_section');
product_sushi.innerHTML = productCardRender(catalog);

let product_poke = document.querySelector('.cards_of_poke_section');
product_poke.innerHTML = productCardRender(catalog);



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
let shopping_list = document.querySelector('.basket_show');

ButtnBag.addEventListener('click', function(){
    shopping_list.classList.toggle('basket_show');   
});

let delete_element = document.querySelectorAll('.rmv_product');
if(delete_element){
    delete_element.forEach(item =>{
        item.addEventListener('click', function(e){
            basket.removeProductFromBasket(e.target.id);
        });
    });
}
