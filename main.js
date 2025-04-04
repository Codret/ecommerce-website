import './style.css';

import products from "./public/api/product.json";
import { showProductsContainer } from './homeproductCards';

// call the function to display all the product as a card
showProductsContainer(products);

