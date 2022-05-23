//добавить элемент в localstorage при нажатии на кнопку

export default class ProductsAdd{  
    constructor(){
        this.products = [];
    }

    get product_array(){
        return this.products;
    }

    add_product(productId){
        let existProduct = this.products.find(item => item.id == productId);
        if(!existProduct){
            this.products.push({
                id: productId,
                quantity: 1
            })}else{
                existProduct.quantity++;
            }
        }

}


    /*handleSetLocalStorage(id, putMethod){
        const {products} = putMethod(id); //bascket_localstorage.putProducts(id); // вызываем метод из Bascket_localstorage
        counterPage.render(products.length); // для вывода счёта количество товаров сразу после нажатия на кнопку
    }

    render(putMethod){
        products.forEach(({id}) => {
            buttonPrice.forEach(item => {
                item.addEventListener('click', function(){   // нажатие на акнопку 
                    putMethod(this, id);
                    //productPage.handleSetLocalStorage(this, id);
                })
            });
    }); */

//const productPage = new ProductsAdd();
//const buttonPrice = document.querySelectorAll('.inform_newprice');
//productPage.render();
