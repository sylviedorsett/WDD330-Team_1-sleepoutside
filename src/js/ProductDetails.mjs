import {setLocalStorage, getLocalStorage} from "./utils.mjs";
import { showCartQuantity } from "./cart.js";

export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId;
      this.product = {};
      this.dataSource = dataSource;
    }

    async init() {
      //get details for current product
      this.product = await this.dataSource.findProductById(this.productId)
      //render HTML with product details
      this.renderProductDetails();
    //add listener to cart button
      document.getElementById("addToCart")
      .addEventListener("click", this.addToCartHandler.bind(this));
    }

    addProductToCart(product) {
      let cart = getLocalStorage("so-cart");
      if (cart === null) {
        cart = [];
      }
      cart.push(product);
      setLocalStorage("so-cart", cart);
    }

    async addToCartHandler(e) {
      //animate icon
      this.play();
      //get product
      const product = await dataSource.findProductById(e.target.dataset.id);
      //add product to cart
      addProductToCart(product);
      //update icon superscript
      showCartQuantity();
    }
    
    async removeFromCartHandler(e) {
      const product = await dataSource.findProductById(e.target.dataset.id);
      removeProductFromCart(product);
      showCartQuantity();
    }

    renderProductDetails(){
      //get discount to insert into product string literal
      let discount = Math.trunc(this.calc_discount());
      //create product string literal
      let product_string =`<section class="product-detail">
      <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>
      <img class="divider"
        src="${this.product.Image}"
        alt="${this.product.Name}"/>
      <p class="discount">Sale: ${discount}% Off</p>
      <p class="product-card__price">Was: <strike>$${this.product.SuggestedRetailPrice}</strike> Now: $${this.product.ListPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <p class="product__description">${this.product.DescriptionHtmlSimple}</p>
      <div class="product-detail__add">
      <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
      </div>
      </section>`
      //insert HTML
      document.getElementById("product_details").innerHTML = product_string;
    }

    //Code to calculate discounts for products
    calc_discount() {
      return 100 - this.product.ListPrice / this.product.SuggestedRetailPrice*100;
    }

    //Code for animation for cart icon
    play() {
      const cart = document.querySelector('.cart');
      cart.classList.add('cart-animate');
      this.stop();
    }
    stop() {
      const cart = document.querySelector('.cart')
      cart.addEventListener('animationend', function(){cart.classList.remove('cart-animate');});
    }
}
    




