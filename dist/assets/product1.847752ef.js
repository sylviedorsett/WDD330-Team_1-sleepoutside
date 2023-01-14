import{a as s}from"./utils.7f2562c3.js";import{a as c,s as i}from"./product.947718fb.js";import{P as a}from"./main.126b433d.js";const o=s(),r=new a("tents");class e{constructor(t,d){this.productId=t,this.product={},this.dataSource=d}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCartHandler.bind(this))}async addToCartHandler(t){const d=await r.findProductById(t.target.dataset.id);c(d),i()}renderProductDetails(){let t=Math.trunc(this.calc_discount()),d=`<section class="product-detail">

        <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.Name}"
        />

        <p class="discount">Sale: ${t}% Off</p>
        <p class="product-card__price">Was: <strike>$${this.product.SuggestedRetailPrice}</strike> Now: $${this.product.ListPrice}</p>

        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">${this.product.DescriptionHtmlSimple}</p>
        <div class="product-detail__add">
        <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
      </div>
      </section>`;document.getElementById("product_details").innerHTML=d}calc_discount(){return 100-this.product.ListPrice/this.product.SuggestedRetailPrice*100}}const u=new e(o,r);u.init();
