import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();

export const addToCart = (evt, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();
    // console.log(arrLocalStorageProduct);

    const currentProductElement = document.querySelector(`#card${id}`);
    // console.log(currentProductElement);

    let quantity = currentProductElement.querySelector(".productQuantity").innerText;
    let price = currentProductElement.querySelector(".productPrice").innerText;
    // console.log(quantity, price);
    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find((currProd) => currProd.id === id);
    
    if(existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = quantity*price;

    let updatedCart = {id, quantity, price};
    updatedCart = arrLocalStorageProduct.map((currProd) => {
        return currProd.id=== id ? updatedCart: currProd;
    })
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    showToast("add", id);
    
    }  

    if(existingProd){
        return false;
    }
    
    price = quantity*price;
    quantity = Number(quantity);

    // let updatedCart = {id, quantity, price};
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
    
    updateCartValue(arrLocalStorageProduct);
    showToast("add", id);
}