import ShoppingCart from "./shoppingCart.mjs";

const cart = new ShoppingCart("so-cart", ".product-list");

cart.renderCartContents();


//Animation for Cart Icon when items are added
document.getElementById("addToCart").addEventListener("click", play);
console.log('play function not called');


export function play() {
    console.log('called')
    

  }
  
export function 