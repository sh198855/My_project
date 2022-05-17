//счёт суммы товаров и вывод его в '.price'

import { products } from "./catalog.js";

export default class Shoppping{

    constructor(){
        this.summ = 0;
        this.product_array = [];
    }

    set pushProducts(value){
        this.product_array = value;
    }

    render(){
        this.product_array.forEach(product=> {
            let dataBaseProduct = products.find(item => {product.id == item.id});
            if(dataBaseProduct){
                this.summ += parseInt(product.quantity) * parseFloat(dataBaseProduct.price);
            }
        })
        document.querySelector('.price').innerHTML = this.summ;
    }
    /*
    render(product_array){
        const productStorage = product_array; //bascket_localstorage.getProducts();
        let summ = 0;

        products.forEach(({id, price}) => {
            if (productStorage.indexOf(id) !==-1){
                summ += price;
            } else {
                document.querySelector('.price').innerHTML = summ.toLocaleString();
            }
            document.querySelector('.price').innerHTML = summ.toLocaleString();
        });

    }*/
}

//shoud be realized a list of products



//const shoppingPage = new Shoppping();
//shoppingPage.render();
