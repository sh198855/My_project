//счёт суммы товаров и вывод его в '.price'

class Shoppping{

    render(){
        const productStorage = bascket_localstorage.getProducts();
        let summ = 0;

        PRODUCTS.forEach(({id, price}) => {
            if (productStorage.indexOf(id) !==-1){
                summ += price;
            } else {
                document.querySelector('.price').innerHTML = summ.toLocaleString();
            }
            document.querySelector('.price').innerHTML = summ.toLocaleString();
        });

    }
}

//shoud be realized a list of products

const shoppingPage = new Shoppping();
shoppingPage.render();
