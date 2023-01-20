import { getLocalStorage } from "./utils.mjs"; 

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
      <p class="cart-card__price">$${item.FinalPrice}</p>
    </li>`;
    
      return newItem;
    }
   
    removeFromCart(productId) {
      // find the id in the local storage "so-cart" object and remove the first one with the same id as given
      
      // for testing purposes, delete later
      console.log(JSON.parse(localStorage.getItem("so-cart")));
      // function to delete when match is found
      function rem(itemInCart, idToDelete) {
        if(itemInCart['Id'] === idToDelete) { console.log(ar.splice(ar.indexOf(itemInCart), 1));}
      }
      // variable to hold the array of items in cart
      let ar = JSON.parse(localStorage.getItem("so-cart"));
      // loop to find match
      ar.forEach(itemInCart => (rem(itemInCart, productId)));
      // set local storage to new array
      setLocalStorage("so-cart", ar)
      // render the cart again now that the item is removed
      renderCartContents();
      
    
    }
    // window.document. do I have to declare global variable? How can I do this?
    
    // let deleteBtns = document.querySelectorAll(".cart-card_delete_btn");
    // deleteBtns.forEach(item => {item.addEventListener('click', removeFromCart(`${item.value}`))}); // removeFromCart(`${item.value}`) replaced by console.log()
    // document.querySelectorAll(".cart-card_delete_btn").forEach(item => {console.log(item.value)});
    
}