const cartValue = document.querySelector("#cartValue");
export const updateCartValue = (cartProducts) => {
    
    return cartValue.innerText = cartProducts.length;
}