import{r as i}from"./main.7e16916c.js";/* empty css              */import{P as o}from"./ProductData.c47eadd2.js";function d(a){const{Id:t,Image:r,ListPrice:e,NameWithoutBrand:s}=a,{Name:c}=a.Brand;return`<li class="product-card">
    <a href="product_pages/?product=${t}">
      <img
        src="${r}"
        alt="Image of ${s}"
      />
      <h3 class="card__brand">${c}</h3>
      <h2 class="card__name">${s}</h2>
      <p class="product-card__price">$${e}</p></a>
  </li>`}class n{constructor(t,r,e){this.category=t,this.dataSource=r,this.listElement=e}async init(){let t=await this.dataSource.getData(),r=this.filterProductList(t);this.renderList(d,r)}renderList(t,r){i(t,this.listElement,r)}filterProductList(t){var r=Math.floor(Math.random()*(t.length+1-4));return t.slice(r,r+4)}}const l=document.querySelector(".product-list"),u=new o("tents"),m=new n("tents",u,l);m.init();
