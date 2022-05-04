//добавить элемент в localstorage при нажатии на кнопку

class Products{
    
    handleSetLocationStorage(id){
        const {products} =  bascket_localstorage.putProducts(id); // вызываем метод из Bascket_localstorage
        counterPage.render(products.length); // для синхронного вывода счёта количества товаров 
    }

    render(){
        PRODUCTS.forEach(({id}) => {

        buttonPrice.forEach((item) => {
            item.addEventListener('onclick', function(){   // нажатие на акнопку 
                productPage.handleSetLocationStorage(this, id)
            })
        });

           // <button onclick="productPage.handleSetLocationStorage(this, '${id}')">${price}</button>

    });

    }

}

const productPage = new Products();
const buttonPrice = document.querySelectorAll('.price');
productPage.render();