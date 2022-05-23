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
        console.log(this.products);
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
        console.log(this.products.length);
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

/*     removeProductToBasket(id) {

    } */

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
