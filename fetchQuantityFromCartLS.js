import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartLS = (id, price) => {
    let cartproducts = getCartProductFromLS();

    let existingProd = cartproducts.find((currProd) => currProd.id === id)
    let quantity = 1;

    if(existingProd){
        quantity = existingProd.quantity;
        price = existingProd.price;
    }

    return {quantity, price}
};