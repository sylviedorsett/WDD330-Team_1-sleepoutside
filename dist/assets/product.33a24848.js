import{g as o,s as d,a as e,b as i}from"./main.f60ce63e.js";/* empty css              */import{P as n}from"./ProductData.24194744.js";class l{constructor(r,t){this.productId=r,this.product={},this.dataSource=t}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCartHandler.bind(this))}addProductToCart(r){let t=o("so-cart");t===null&&(t=[]),t.push(r),d("so-cart",t)}async addToCartHandler(r){this.play();const t=await this.dataSource.findProductById(r.target.dataset.id);this.addProductToCart(t),e()}async removeFromCartHandler(r){const t=await this.dataSource.findProductById(r.target.dataset.id);removeProductFromCart(t),e()}renderProductDetails(){let r=Math.trunc(this.calc_discount()),t=`<section class="product-detail">
      <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>
      <img class="divider"
        src="${this.product.Images.PrimaryMedium}"
        alt="${this.product.Name}"/>
      <p class="discount">Sale: ${r}% Off</p>
      <p class="product-card__price">Was: <strike>$${this.product.SuggestedRetailPrice}</strike> Now: $${this.product.ListPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <p class="product__description">${this.product.DescriptionHtmlSimple}</p>
      <div class="product-detail__add">
      <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
      </div>
      </section>`;document.getElementById("product_details").innerHTML=t}calc_discount(){return 100-this.product.ListPrice/this.product.SuggestedRetailPrice*100}play(){document.querySelector(".cart").classList.add("cart-animate"),this.stop()}stop(){const r=document.querySelector(".cart");r.addEventListener("animationend",function(){r.classList.remove("cart-animate")})}}const u=new n,p=i("product"),h=new l(p,u);h.init();class m{constructor(){this.alertList=document.createElement("section"),this.alertList.classList.add("alert-list")}async fetchAlerts(){return await(await fetch("/json/alert.json")).json()}async create(){(await this.fetchAlerts()).alerts.forEach(s=>{let a=document.createElement("p");a.innerHTML=s.message,a.style.backgroundColor=s.bgColor,a.style.color=s.textColor,a.classList.add("alert-item"),this.alertList.appendChild(a)});const t=document.querySelector("main");t&&t.prepend(this.alertList)}}const g=new m;g.create();
