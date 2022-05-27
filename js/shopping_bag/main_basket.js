class Basket {

    constructor() {
        this.products = [];
        this.summ = 0;
        this.quantity = 0;
        this.getProductsOfLocalStorage();
        this.calculate();
        this.render();
        this.render_show_basket();
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
        this.render_show_basket();
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

    render_show_basket(){
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
                        <span class="rmv_product" product_id=${product_from_list.id}><div class = "basket_img" ><img src="/images/delete.png" alt="корзина"></div></span>
                    </div>
                `;
                } 
            })
        }
    }

    removeProductFromBasket(id) {
        let product = this.products.find(item => item.id == id); 
        if(product){
            localStorage.removeItem(id);
            this.calculate();
            this.render();
            this.render_show_basket();
        }
        
    } 
}

let basket = new Basket();

let addProduct = document.querySelectorAll('.inform_newprice');
if (addProduct && addProduct.length > 0) {
    addProduct.forEach(product => {
        product.addEventListener('click', function (e) {
            basket.addProductToBasket(e.target.id);
        })
    })
}

let delete_element = document.querySelectorAll('.rmv_product');
if(delete_element && delete_element.length > 0){
    delete_element.forEach(item =>{
        item.addEventListener('click', function(e){
            console.log("clicked!");
            basket.removeProductFromBasket(e.target.getAttribute('product_id'));
        })
    })
}



basket.render_show_basket();
let ButtnBag = document.querySelector('.count_product');
let shopping_list = document.querySelector('.basket_show');

ButtnBag.addEventListener('click', function(){
    shopping_list.classList.toggle('basket_show');   
});
