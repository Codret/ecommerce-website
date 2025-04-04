import product from "./public/api/product.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = product.filter((currProd) => {
    return cartProducts.some((currElem) => currProd.id  === currElem.id);
});



console.log(filterProducts);

const cardElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCardTemplate");

const showCartProducts = () => {
    filterProducts.forEach((currprod) => {
        const {category, id, image, name, stock, price} = currprod;

        let productClone = document.importNode(templateContainer.content, true);
        const LSActualData = fetchQuantityFromCartLS(id, price);
        
        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productStock").textContent = `Stock Left ${stock}`;
        

        
        productClone.querySelector(".productPrice").textContent =LSActualData.price;
        productClone.querySelector(".productQuantity").textContent =LSActualData.quantity;
        
        productClone.querySelector(".stockElement").addEventListener("click", (event)=> {
            incrementDecrement(event, id, stock, price);
        })

        
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => {
            removeProdFromCart(id);
        });

        cardElement.append(productClone);
    }) 
}


showCartProducts();

updateCartProductTotal();

