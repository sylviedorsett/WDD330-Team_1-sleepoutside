import { getLocalStorage, setLocalStorage } from "./utils.mjs"; 
import { showCartQuantity } from "./product.js";

export default class ShoppingCart {
    constructor(key, parentSelector) {
      this.key = key;
      this.parentSelector = parentSelector;
    }

    renderCartContents() {
      const cartItems = getLocalStorage("so-cart");
      
      const htmlItems = cartItems.map((item) => this.cartItemTemplate(item));
    
      document.querySelector(".product-list").innerHTML = htmlItems.join("");
      this.cartTotal();
      let deleteBtns = document.querySelectorAll(".cart-card_delete_btn");
      deleteBtns.forEach(item => {item.addEventListener('click', () => {this.removeProductFromCart(`${item.value}`)})});
      // let deleteBtns = document.querySelectorAll(".cart-card_delete_btn");
      // deleteBtns.forEach(item => {item.addEventListener('click', this.removeProductFromCart(`${item.value}`))}); // removeFromCart(`${item.value}`) replaced by console.log()
      // document.querySelectorAll(".cart-card_delete_btn").forEach(item => {"2", console.log(item.value)});
    }

    //The cartTotal function calculates the sum of the cost of items in the cart
    cartTotal() {
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

    //function to create template
    cartItemTemplate(item) {
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
      <button class="cart-card_delete_btn" value="${item.Id}">X</button>
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>`;
    
      return newItem;
    }
   
    removeProductFromCart(productId) {
      // find the id in the local storage "so-cart" object and remove the first one with the same id as given
      console.log(productId);
      // for testing purposes, delete later
      console.log("1", JSON.parse(localStorage.getItem("so-cart")));
      // function to delete when match is found
      function rem(itemInCart, idToDelete) {
        if(itemInCart['Id'] === idToDelete) { console.log(ar.splice(ar.indexOf(itemInCart), 1)); return true;
        } else { return false;}
      }
      // variable to hold the array of items in cart
      let ar = JSON.parse(localStorage.getItem("so-cart"));
      // loop to find match
      for (const itemInCart of ar){ if(rem(itemInCart, productId)){break;}};
      // set local storage to new array
      setLocalStorage("so-cart", ar)
      // render the cart again now that the item is removed
      this.renderCartContents();
      showCartQuantity();
      
    
    }
    
    
}