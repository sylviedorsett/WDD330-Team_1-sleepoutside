import { g as c, s as o, a as l } from "./main.9e82ff00.js";
/* empty css              */ class n {
  constructor(t, e) {
    (this.key = t), (this.parentSelector = e);
  }
  renderCartContents() {
    const e = c("so-cart").map((r) => this.cartItemTemplate(r));
    (document.querySelector(this.parentSelector).innerHTML = e.join("")),
      this.cartTotal(),
      document.querySelectorAll(".cart-card_delete_btn").forEach((r) => {
        r.addEventListener("click", () => {
          this.removeProductFromCart(`${r.value}`);
        });
      });
  }
  cartItemTemplate(t) {
    return `<li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img
          src="${t.Images.PrimarySmall}"
          alt="${t.Name}"
        />
      </a>
      <a href="#">
        <h2 class="card__name">${t.Name}</h2>
      </a>
      <p class="cart-card__color">${t.Colors[0].ColorName}</p>
      <p class="cart-card__quantity">qty: 1</p>
      <button class="cart-card_delete_btn" value="${t.Id}">X</button>
      <p class="cart-card__price">$${t.FinalPrice}</p>
    </li>`;
  }
  cartTotal() {
    let t = c("so-cart");
    if (t) {
      let e = 0;
      t.forEach((a) => {
        e += a.ListPrice;
      }),
        (document.getElementsByClassName("hide-total")[0].innerHTML =
          "Total: $" + e.toFixed(2)),
        (document.querySelector(".hide-total").style.display = "block");
    } else document.querySelector(".hide-total").style.display = "none";
  }
  removeProductFromCart(t) {
    function e(r, s) {
      return r.Id === s ? (a.splice(a.indexOf(r), 1), !0) : !1;
    }
    let a = JSON.parse(localStorage.getItem("so-cart"));
    for (const r of a) if (e(r, t)) break;
    o("so-cart", a), this.renderCartContents(), l();
  }
}
const d = new n("so-cart", ".product-list");
d.renderCartContents();
