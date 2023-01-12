import{g as r}from"./main.44e67c28.js";/* empty css              */function c(){const e=r("so-cart").map(a=>o(a));document.querySelector(".product-list").innerHTML=e.join("")}function o(t){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
</li>`}c();function s(){let t=r("so-cart");if(t){let e=0;t.forEach(a=>{e+=a.ListPrice}),document.getElementsByClassName("hide-total")[0].innerHTML="Total: $"+e,document.querySelector(".hide-total").style.display="block"}else document.querySelector(".hide-total").style.display="none"}s();
