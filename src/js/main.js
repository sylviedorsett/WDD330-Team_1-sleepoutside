import { getLocalStorage } from "./utils.mjs";

// function to Add a superscript number of items
// in the cart to the backpack icon.
export function showCartQuantity() {
  let cart = getLocalStorage("so-cart");

  // select the div element I (prince) added to the all the html docs.
  let cartQuantityElement = document.querySelector("#cart-items-number");

  // Set the superscript to the number of items in the cart 'IF'
  // there is an item in the cart.
  if (cart) {
    cartQuantityElement.textContent = cart.length;
    cartQuantityElement.style.display = "block";
  } else {
    cartQuantityElement.style.display = "none";
  }
}

showCartQuantity();
