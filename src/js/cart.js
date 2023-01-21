import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./shoppingCart.mjs";

loadHeaderFooter();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();

// function to Add a superscript number of items
// in the cart to the backpack icon.
export function showCartQuantity() {
  let new_cart = getLocalStorage("so-cart");
  // select the div element I (prince) added to the all the html docs.
  let cartQuantityElement = document.querySelector("#cart-items-number");
  // console.log(cartQuantityElement);
  // Set the superscript to the number of items in the cart 'IF'
  // there is an item in the cart.
  if (new_cart) {
    cartQuantityElement.textContent = cart.length;
    cartQuantityElement.style.display = "block";
  } else {
    cartQuantityElement.style.display = "none";
  }
}
