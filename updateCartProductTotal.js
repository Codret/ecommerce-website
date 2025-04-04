import { getCartProductFromLS } from "./getCartProductFromLS";



export const updateCartProductTotal = ()=> {
    const productSubTotal = document.querySelector('.productSubTotal');
    const productFinalTotal = document.querySelector('.productFinalTotal');
    const productTax = document.querySelector('.productTax');
    let productTaxValue = productTax.textContent;
    let LocalCartProducts = getCartProductFromLS();
    // console.log(LocalCartProducts);
    let initialValue = 0;
    let totalProductPrice = LocalCartProducts.reduce((accum, currElem) => {
        let productPrice = currElem.price;
        return accum + productPrice;
    }, initialValue)

    productSubTotal.textContent= `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`;
    
    
    console.log(totalProductPrice);
    
}