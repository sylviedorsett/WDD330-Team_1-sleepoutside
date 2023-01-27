import { g as c, s, a as l } from "./main.89491944.js";
class n {
  constructor(t, e) {
    (this.key = t), (this.parentSelector = e);
  }
  renderCartContents() {
    const e = c("so-cart").map((a) => this.cartItemTemplate(a));
    (document.querySelector(this.parentSelector).innerHTML = e.join("")),
      this.cartTotal(),
      document.querySelectorAll(".cart-card_delete_btn").forEach((a) => {
        a.addEventListener("click", () => {
          this.removeProductFromCart(`${a.value}`);
        });
      });
  }
  cartItemTemplate(t) {
    return `<img class="cart_img_small_view"
      src="${t.Images.PrimaryMedium}"
      alt="${t.Name}"
    />
      <li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img class="cart_img"
          src="${t.Images.PrimaryMedium}"
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
      (e = e.toFixed(2)),
        (e = parseFloat(e)),
        t.forEach((r) => {
          e += r.ListPrice;
        }),
        (document.getElementsByClassName("cart-total")[0].innerHTML =
          "Total: $" + e.toFixed(2)),
        (document.querySelector(".hide-total").style.display = "flex"),
        s("total", e),
        console.log(e),
        console.log(typeof e);
    } else document.querySelector(".hide-total").style.display = "none";
  }
  removeProductFromCart(t) {
    function e(a, o) {
      return a.Id === o ? (r.splice(r.indexOf(a), 1), !0) : !1;
    }
    let r = JSON.parse(localStorage.getItem("so-cart"));
    for (const a of r) if (e(a, t)) break;
    s("so-cart", r), this.renderCartContents(), l();
  }
}
const i = new n("so-cart", ".product-list");
i.renderCartContents();
