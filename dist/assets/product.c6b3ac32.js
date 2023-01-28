import { g as o, s as n, a as d, b as u, E as l } from "./main.8cfc34a6.js";
class p {
  constructor(e, t) {
    (this.productId = e),
      (this.product = {}),
      (this.dataSource = t),
      (this.url = document.URL);
  }
  async init() {
    (this.product = await this.dataSource.findProductById(this.productId)),
      this.renderProductDetails(),
      document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCartHandler.bind(this));
    const e = document.getElementById("product_page_breadcrumb");
    e.href = this.url;
    const t = this.product.Category;
    document.getElementById(
      "list_page_breadcrumb"
    ).href = `../product-listing/index.html?category=${t}`;
  }
  addProductToCart(e) {
    let t = o("so-cart");
    t === null && (t = []);
    let a = this.handleQuantity(e, t);
    if (a.newItem) t.push(e);
    else {
      let r = e.Id,
        s = t.findIndex((c) => c.Id === r);
      t[s].Quantity = a.newQunatity;
    }
    n("so-cart", t);
  }
  handleQuantity(e, t) {
    let a = !0,
      r = { Quantity: 0 };
    for (let s in t)
      if (t[s].Id === e.Id) {
        (t[s].Quantity = parseInt(t[s].Quantity) + 1),
          (r = t[s].Quantity),
          (a = !1);
        break;
      }
    return a && (e.Quantity = 1), { newItem: a, newQunatity: r };
  }
  async addToCartHandler(e) {
    this.play();
    const t = await this.dataSource.findProductById(e.target.dataset.id);
    this.addProductToCart(t), d();
  }
  async removeFromCartHandler(e) {
    const t = await this.dataSource.findProductById(e.target.dataset.id);
    removeProductFromCart(t), d();
  }
  renderProductDetails() {
    let e = Math.trunc(this.calc_discount()),
      t = `<section class="product-detail">
      <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>
      <img class="divider product_img"
        src="${this.product.Images.PrimaryMedium}"
        alt="${this.product.Name}"/>
      <p class="discount">Sale: ${e}% Off</p>
      <p class="product-card__price">Was: <strike>$${this.product.SuggestedRetailPrice}</strike> Now: $${this.product.ListPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <p class="product__description">${this.product.DescriptionHtmlSimple}</p>
      <div class="product-detail__add">
      <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
      </div>
      </section>`;
    document.getElementById("product_details").innerHTML = t;
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
    const e = document.querySelector(".cart");
    e.addEventListener("animationend", function () {
      e.classList.remove("cart-animate");
    });
  }
}
const h = new l(),
  m = u("product"),
  y = new p(m, h);
y.init();
class g {
  constructor() {
    (this.alertList = document.createElement("section")),
      this.alertList.classList.add("alert-list");
  }
  async fetchAlerts() {
    return await (await fetch("/json/alert.json")).json();
  }
  async create() {
    (await this.fetchAlerts()).alerts.forEach((a) => {
      let r = document.createElement("p");
      (r.innerHTML = a.message),
        (r.style.backgroundColor = a.bgColor),
        (r.style.color = a.textColor),
        r.classList.add("alert-item"),
        this.alertList.appendChild(r);
    });
    const t = document.querySelector("main");
    t && t.prepend(this.alertList);
  }
}
const I = new g();
I.create();
