class Products{
    
    handleSetLocationStorage(element, id){     //добавить элемент в localstorage при нажатии на кнопку
        const {products} =  bascket_localstorage.putProducts(id);
        counterPage.render(products.length);
        //console.log(element, id)
    }

    render(){
        let htmlCatalog = '';
        PRODUCTS.forEach(({id, price, title, description, oldPrice}) => {
       
        htmlCatalog += `
        <div>
            <span>${title}</span>
            <span>${description}</span>
        </div>
        <div>
            <span>${oldPrice}</span>
            <button onclick="productPage.handleSetLocationStorage(this, '${id}')">${price}</button>
        </div>
        `;
    });
    const html =`
        <div>
            ${htmlCatalog}
        </div>
    `; 

    ROOT_PRODUCTS.innerHTML = html;

    }

}

const productPage = new Products();
productPage.render();