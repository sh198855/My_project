//счёт количество товаров и вывод его на '.count_product'


export default class Counter{
    constructor(){
        this.product_array = []
    }
    set pushProduct(value){
        this.product_array = value;
    }

    render(){
        document.querySelector('.count_product').innerHTML = this.product_array.length;
    }
}

/*
render(count){
    document.querySelector('.count_product').innerHTML = count;
}*/
//const counterPage = new Counter();
//const bascket_count = bascket_localstorage.getProducts();
//counterPage.render(bascket_count.length);
