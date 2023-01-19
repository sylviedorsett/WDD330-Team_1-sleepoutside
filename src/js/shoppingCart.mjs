import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  cartTotal();
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}
renderCartContents();

export default class ShoppingCart {
    constructor(key, parentSelector) {
      this.key = key;
      this.parentSelector = parentSelector;
    }
}

//**********************************************************************************/

//The cartTotal function calculates the sum of the cost of items in the cart
export function cartTotal() {
  //save the items array in local storage to the variable 'cart'
  let cartItems = getLocalStorage("so-cart");

  //if there is an item in the cart, calculate and show the total
  //else hide the div
  if (cartItems) {
    let sum = 0;
    //loop through items in so-cart
    //pull list price from array and add to sum
    cartItems.forEach((item) => {
      sum += item.ListPrice;
    });
    //insert sum into html
    document.getElementsByClassName("hide-total")[0].innerHTML =
      "Total: $" + sum.toFixed(2);
    //document.querySelector(".cart-total").innerHTML = "Total: $" + sum;
    //unhide element
    document.querySelector(".hide-total").style.display = "block";
  } else {
    //hide element
    document.querySelector(".hide-total").style.display = "none";
  }
}
