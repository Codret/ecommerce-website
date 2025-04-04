import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartproducts = getCartProductFromLS();

    cartproducts= cartproducts.filter((currprod) => currprod.id !== id);

    localStorage.setItem("cartProductLS", JSON.stringify(cartproducts));

    let removeDiv = document.getElementById(`card${id}`);
    removeDiv.remove(); 
    showToast("delete", id);

    updateCartValue(cartproducts);
    updateCartProductTotal();
}