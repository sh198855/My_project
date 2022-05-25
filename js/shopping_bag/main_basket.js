class Basket {

    constructor() {
        this.products = [];
        this.summ = 0;
        this.quantity = 0;
        this.getProductsOfLocalStorage();
        this.calculate();
        this.render();
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
        let show_shopping_bag = document.querySelector('.basket_show');
        show_shopping_bag.innerHTML = '';
        if(this.products.length>0){
            this.products.forEach(product => {
                let product_from_list = this.products.find(item => item.id == product.id);
                if(product_from_list){
                    show_shopping_bag.innerHTML += `
                    <div class = "bascket_style">
                        <div class = "basket_item">
                            <span>${product_from_list.title}</span>
                            <span>${product_from_list.price}</span>
                            <span class="rmv_product" id_product = ${product_from_list.id}>удалить</span>
                        </div>
                    </div>
                `;
                }

            })}
        let removeProduct = document.querySelectorAll('.rmv_product');
        removeProduct.forEach(product => {
            product.addEventListener('click', function(e) {
                basket.removeProductFromBasket(e.target.id);
            })
        })
    }

    removeProductFromBasket(id) {
        let product = this.products.find(item => item.id == id); 
        if(product){
            localStorage.removeItem(id);
            this.calculate();
            this.render();
        }
        this.render_show_basket();

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

let ButtnBag = document.querySelector('.count_product');
let shopping_list = document.querySelector('.basket_show');
basket.render_show_basket();

ButtnBag.addEventListener('click', function(){
    shopping_list.classList.toggle('basket_show');
    let delete_element = document.querySelectorAll('.rmv_product');
    delete_element.forEach(item =>{
        item.addEventListener('click', function(e){
            basket.removeProductFromBasket(e.target.getAttribute('id_product'));
        })
    })

    
})
