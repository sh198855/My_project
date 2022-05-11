//счёт количество товаров и вывод его на '.count_product'


class Counter{
    render(count){
        document.querySelector('.count_product').innerHTML = count;
    }
}

const counterPage = new Counter();
const bascket_count = bascket_localstorage.getProducts();
counterPage.render(bascket_count.length);
