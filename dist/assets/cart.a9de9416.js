import{g as r}from"./main.f60ce63e.js";/* empty css              */class c{constructor(t,e){this.key=t,this.parentSelector=e}renderCartContents(){const e=r("so-cart").map(a=>this.cartItemTemplate(a));document.querySelector(this.parentSelector).innerHTML=e.join(""),this.cartTotal()}cartItemTemplate(t){return`<li class="cart-card divider">
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
      <p class="cart-card__price">$${t.FinalPrice}</p>
    </li>`}cartTotal(){let t=r("so-cart");if(t){let e=0;t.forEach(a=>{e+=a.ListPrice}),document.getElementsByClassName("hide-total")[0].innerHTML="Total: $"+e.toFixed(2),document.querySelector(".hide-total").style.display="block"}else document.querySelector(".hide-total").style.display="none"}}const s=new c("so-cart",".product-list");s.renderCartContents();
