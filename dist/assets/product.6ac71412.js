import{g as o,s as d,a as e,b as i,P as n}from"./main.9e82ff00.js";/* empty css              */class l{constructor(a,t){this.productId=a,this.product={},this.dataSource=t}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCartHandler.bind(this))}addProductToCart(a){let t=o("so-cart");t===null&&(t=[]),t.push(a),d("so-cart",t)}async addToCartHandler(a){this.play();const t=await this.dataSource.findProductById(a.target.dataset.id);this.addProductToCart(t),e()}async removeFromCartHandler(a){const t=await this.dataSource.findProductById(a.target.dataset.id);removeProductFromCart(t),e()}renderProductDetails(){let a=Math.trunc(this.calc_discount()),t=`<section class="product-detail">
      <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>
      <img class="divider"
        src="${this.product.Images.PrimaryMedium}"
        alt="${this.product.Name}"/>
      <p class="discount">Sale: ${a}% Off</p>
      <p class="product-card__price">Was: <strike>$${this.product.SuggestedRetailPrice}</strike> Now: $${this.product.ListPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <p class="product__description">${this.product.DescriptionHtmlSimple}</p>
      <div class="product-detail__add">
      <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
      </div>
      </section>`;document.getElementById("product_details").innerHTML=t}calc_discount(){return 100-this.product.ListPrice/this.product.SuggestedRetailPrice*100}play(){document.querySelector(".cart").classList.add("cart-animate"),this.stop()}stop(){const a=document.querySelector(".cart");a.addEventListener("animationend",function(){a.classList.remove("cart-animate")})}}const u=new n,p=i("product"),h=new l(p,u);h.init();class m{constructor(){this.alertList=document.createElement("section"),this.alertList.classList.add("alert-list")}async fetchAlerts(){return await(await fetch("/json/alert.json")).json()}async create(){(await this.fetchAlerts()).alerts.forEach(s=>{let r=document.createElement("p");r.innerHTML=s.message,r.style.backgroundColor=s.bgColor,r.style.color=s.textColor,r.classList.add("alert-item"),this.alertList.appendChild(r)});const t=document.querySelector("main");t&&t.prepend(this.alertList)}}const g=new m;g.create();
