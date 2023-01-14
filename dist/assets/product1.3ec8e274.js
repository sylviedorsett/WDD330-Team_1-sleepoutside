import{a}from"./utils.b4a38d3e.js";import{a as o,s}from"./product.7203b501.js";import{P as c}from"./ProductData.45bea58b.js";const i=a(),r=new c("tents");class e{constructor(t,d){this.productId=t,this.product={},this.dataSource=d}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCartHandler.bind(this))}async addToCartHandler(t){const d=await r.findProductById(t.target.dataset.id);o(d),s()}renderProductDetails(){let t=`<section class="product-detail">
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
      </section>`;document.getElementById("product_details").innerHTML=t}}const u=new e(i,r);u.init();
