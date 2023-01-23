import { a as c, b as s, s as a } from "./main.7e16916c.js";
/* empty css              */ import { P as o } from "./ProductData.c47eadd2.js";
const i = c(),
  r = new o("tents");
class e {
  constructor(t, d) {
    (this.productId = t),
      (this.product = {}),
      (this.dataSource = d),
      (this.show = !1);
  }
  async init() {
    (this.product = await this.dataSource.findProductById(this.productId)),
      this.renderProductDetails(),
      document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCartHandler.bind(this));
  }
  async addToCartHandler(t) {
    this.play();
    const d = await r.findProductById(t.target.dataset.id);
    s(d), a();
  }
  async removeFromCartHandler(t) {
    const d = await r.findProductById(t.target.dataset.id);
    removeProductFromCart(d), a();
  }
  renderProductDetails() {
    let t = Math.trunc(this.calc_discount()),
      d = `<section class="product-detail">

        <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.Name}"
        />

        <p class="discount">Sale: ${t}% Off</p>
        <p class="product-card__price">Was: <strike>$${this.product.SuggestedRetailPrice}</strike> Now: $${this.product.ListPrice}</p>

        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">${this.product.DescriptionHtmlSimple}</p>
        <div class="product-detail__add">
        <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
      </div>
      </section>`;
    document.getElementById("product_details").innerHTML = d;
  }
  calc_discount() {
    return (
      100 - (this.product.ListPrice / this.product.SuggestedRetailPrice) * 100
    );
  }
  play() {
    document.querySelector(".cart").classList.add("cart-animate"), this.stop();
  }
  stop() {
    const t = document.querySelector(".cart");
    t.addEventListener("animationend", function () {
      t.classList.remove("cart-animate");
    });
  }
}
const n = new e(i, r);
n.init();
