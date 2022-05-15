import {products} from './catalog.js';
//import basket_loc_st from './bascket_ls.js';
import quantity from './count_quantity.js';
import summ from './count_summ_price.js';
import add_products from './add_products_toLS.js';

//const bascket_ = new basket_loc_st();
const ct_quantity = new quantity();
const ct_summ = new summ();
const add_prod = new add_products();


ct_quantity.render(add_prod.product_array);

ct_summ.render(add_prod.product_array);


let AddButton = document.querySelectorAll('.inform_newprice').forEach(item =>{
    item.addEventListener('click', function(e){
        add_products.add_product(e.target.getAttribute('product'))
    })
})


