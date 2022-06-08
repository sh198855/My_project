import {catalog} from './catalog.js';

export class Basket {

    constructor() {
        this.products = [];
        this.summ = 0;
        this.quantity = 0;
        this.getProductsOfLocalStorage();
        this.calculate();
        this.render();
        this.renderShowBasket();
    }

    getProductsOfLocalStorage() {
        if (localStorage.getItem('products')) this.products = JSON.parse(localStorage.getItem('products'));
    }

    addProductToBasket(id) {
        let product = catalog.find(item => item.id == id);
        
        if (product) {
            let productInBasket = this.products.find(item => item.id == id);
            if (productInBasket) {
                productInBasket.quantity++; 
            } else {
                this.products.push({id: product.id, quantity: 1})
            }
        }
        localStorage.setItem('products', JSON.stringify(this.products));
        this.calculate();
        this.render();
        this.renderShowBasket();
    }

    calculate() {
        this.summ = 0;
        this.quantity = 0;
        if (this.products.length > 0) {
           
            this.products.forEach(element => {
                let product = catalog.find(product => product.id == element.id)
                if (product) {
                    this.summ += product.price * element.quantity;
                    this.quantity += element.quantity;
                }
            });
        }   
    }

    render() {
        let quantity = document.querySelector('.count_product');
        if (quantity) {
            quantity.innerHTML = this.quantity;
        }
        let summ = document.querySelector('.price');
        if (quantity) {
            summ.innerHTML = this.summ;
        }
    }

    renderShowBasket(){
        let show_shopping_bag = document.querySelector('.bascket_style');
        show_shopping_bag.innerHTML = '';
        if(this.products.length>0){
            this.products.forEach(product => {
                let product_from_list = catalog.find(item => item.id == product.id);
                if(product_from_list){
                    show_shopping_bag.innerHTML += `
                    <div class = "basket_item">
                        <span>${product_from_list.title}</span>
                        <span>${product_from_list.price}</span>                       
                        <img src="./images/delete.svg" alt="удалить" class="rmv_product" id = ${product_from_list.id}>
                    </div>
                `;
                } 
            })
        }
  
    }

    removeProductFromBasket(id) {
        let productInBasket = this.products.find(item => item.id == id);

        if (productInBasket){
            this.products.splice(this.products.indexOf(productInBasket), 1);
        }
        localStorage.setItem('products', JSON.stringify(this.products));
        this.calculate();
        this.render();
        this.renderShowBasket(); 
    } 
}


