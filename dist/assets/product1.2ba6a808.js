import"./modulepreload-polyfill.c7c6310f.js";import{a,b as c,s as i}from"./product.7bbac83f.js";function e(d){if(d.ok)return d.json();throw new Error("Bad Response")}class n{constructor(t){this.category=t,this.path=`../json/${this.category}.json`}getData(){return fetch(this.path).then(e).then(t=>t)}async findProductById(t){return(await this.getData()).find(s=>s.Id===t)}}const u=a(),o=new n("tents");class p{constructor(t,r){this.productId=t,this.product={},this.dataSource=r}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCartHandler.bind(this))}async addToCartHandler(t){const r=await o.findProductById(t.target.dataset.id);c(r),i()}renderProductDetails(){let t=`<section class="product-detail">
        <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.Name}"
        />
        <p class="product-card__price">$${this.product.ListPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">${this.product.DescriptionHtmlSimple}</p>
        <div class="product-detail__add">
        <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
      </div>
      </section>`;document.getElementById("product_details").innerHTML=t}}const h=new p(u,o);h.init();
