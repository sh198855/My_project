class Bascket_localstorage {
    constructor(){
        this.keyName = 'products'
    }

    getProducts(){
        const products_LS = localStorage.getItem(this.keyName);
        if (products_LS !== null){
            return JSON.parse(products_LS);
        }
        return[]
    }

    putProducts(id){
        let products = this.getProducts();
        const index = products.indexOf(id);
        if (index === -1){
            products.push(id)
        } else {
            //+ количество товара
            //+ сумма товаров
            products.push(id)
        }

        localStorage.setItem(this.keyName, JSON.stringify(id));
        return{ products }
    }
}

const bascket_localstorage = new Bascket_localstorage();