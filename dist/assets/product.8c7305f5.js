import{g as o,a as n,s as d,b as u,E as l}from"./main.ea653fe0.js";class p{constructor(e,t){this.productId=e,this.product={},this.dataSource=t,this.url=document.URL}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCartHandler.bind(this));const e=document.getElementById("product_page_breadcrumb");e.href=this.url;const t=this.product.Category;document.getElementById("list_page_breadcrumb").href=`../product-listing/index.html?category=${t}`}addProductToCart(e){let t=o("so-cart");t===null&&(t=[]);let r=this.handleQuantity(e,t);if(r.newItem)t.push(e);else{let s=e.Id,a=t.findIndex(c=>c.Id===s);t[a].Quantity=r.newQunatity}n("so-cart",t)}handleQuantity(e,t){let r=!0,s={Quantity:0};for(let a in t)if(t[a].Id===e.Id){t[a].Quantity=parseInt(t[a].Quantity)+1,s=t[a].Quantity,r=!1;break}return r&&(e.Quantity=1),{newItem:r,newQunatity:s}}async addToCartHandler(e){this.play();const t=await this.dataSource.findProductById(e.target.dataset.id);this.addProductToCart(t),d()}async removeFromCartHandler(e){const t=await this.dataSource.findProductById(e.target.dataset.id);removeProductFromCart(t),d()}renderProductDetails(){let e=Math.trunc(this.calc_discount()),t=`<section class="product-detail">
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
      </section>`;document.getElementById("product_details").innerHTML=t}calc_discount(){return 100-this.product.ListPrice/this.product.SuggestedRetailPrice*100}play(){document.querySelector(".cart").classList.add("cart-animate"),this.stop()}stop(){const e=document.querySelector(".cart");e.addEventListener("animationend",function(){e.classList.remove("cart-animate")})}}const h=new l,m=u("product"),y=new p(m,h);y.init();class g{constructor(){this.alertList=document.createElement("section"),this.alertList.classList.add("alert-list")}async fetchAlerts(e){return await(await fetch(e)).json()}async create(e){(await this.fetchAlerts(e)).alerts.forEach(s=>{let a=document.createElement("p");a.innerHTML=s.message,a.style.backgroundColor=s.bgColor,a.style.color=s.textColor,a.classList.add("alert-item"),this.alertList.appendChild(a)});const r=document.querySelector("main");r&&r.prepend(this.alertList)}}const I=new g;I.create("/json/alert.json");
