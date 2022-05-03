class Counter{
    render(count, summ){
        const html = `
        <div>
            <div>${count}</div>
            <p>${summ}</p>
        </div>
        `;

        document.querySelector('.count_product').innerHTML = count;
        document.querySelector('.price').innerHTML = summ;

    }
}

const counterPage = new Counter();
const bascket_count = bascket_localstorage.getProducts();
counterPage.render(bascket_count.length);
//summ needs be realized