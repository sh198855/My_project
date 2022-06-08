export const catalog = [
    {
        id: 1,
        price: 1925,
        title: 'Филадельфия люкс',
        description: '8 шт./350 гр.',
        oldPrice: 10000,
    },
    {
        id: 2,
        price: 1700,
        title: 'Филадельфия люкс',
        description: '8 шт./350 гр.',
        oldPrice: 10000,
    },
    {
        id: 3,
        price: 1800,
        title: 'Филадельфия люкс',
        description: '8 шт./350 гр.',
        oldPrice: 10000,
    },
    {
        id: 4,
        price: 564,
        title: 'Филадельфия люкс',
        description: '8 шт./350 гр.',
        oldPrice: 10000,
    },
    {
        id: 5,
        price: 888,
        title: 'Филадельфия люкс',
        description: '8 шт./350 гр.',
        oldPrice: 10000,
    },
    {
        id: 6,
        price: 888,
        title: 'Филадельфия люкс',
        description: '8 шт./350 гр.',
        oldPrice: 10000,
    },
]


export function productCardRender(catalog){
    var row ='';
    var product_cards = '';
 
    catalog.forEach(product =>{
        product_cards += `
                            <div class="card_of_section">
                                <div class="imgs_of_section">
                                    <div class="img_icons">
                                        <img src="images/Vector_1.svg" alt="pepper">
                                        <img src="images/Vector_2.svg" alt="fire">
                                        <img src="images/Vector_3.svg" alt="greenery">
                                    </div>
                                    <img src="images/Frame_1.svg" alt="main card" class="img_icon_main">
                                </div>
                                <div class="inform_part">
                                    <div class="left_inform_part">
                                        <span class="left_inform_value_1">${product.title}</span>
                                        <span class="left_inform_value_2">${product.description}</span>
                                    </div>
                                    <div class="right_inform_part">
                                        <span class="inform_oldprice">${product.oldPrice} &#8381;</span>
                                        <button class="inform_newprice" href="#" id="${product.id}">${product.price} &#8381;</button>
                                    </div>
                                </div>
                            </div>`;
        row = product_cards;
        
    });

    return row;
}





