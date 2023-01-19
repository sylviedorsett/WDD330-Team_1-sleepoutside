import ShoppingCart from "./shoppingCart.mjs";

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();


//Animation for Cart Icon when items are added
document.getElementById("addToCart").addEventListener("click", play);

export function play() {
    const cart = document.getElementById('cart_div')
    cart.classList.replace('cart', 'cart-animate');
    //stop();
  }
  
  export function stop() {
    const cart = document.getElementById('cart_div')
    cart.classList.replace('cart-animate', 'cart');
  }