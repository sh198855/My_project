//добавить элемент в localstorage при нажатии на кнопку

class Products{
    
    handleSetLocalStorage(id){
        const {products} =  bascket_localstorage.putProducts(id); // вызываем метод из Bascket_localstorage
        counterPage.render(products.length); // для вывода счёта количество товаров сразу после нажатия на кнопку
    }

    render(){
        PRODUCTS.forEach(({id}) => {
            buttonPrice.forEach(item => {
                item.addEventListener('click', function(){   // нажатие на акнопку 
                    productPage.handleSetLocalStorage(this, id);
                })
            });
    });

    }

}

const productPage = new Products();
const buttonPrice = document.querySelectorAll('.inform_newprice');
productPage.render();