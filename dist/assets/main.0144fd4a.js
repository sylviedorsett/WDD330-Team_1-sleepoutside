import{P as i}from"./ProductData.45bea58b.js";import{r as c}from"./utils.b4a38d3e.js";function o(t){return`<li class="product-card">
    <a href="product_pages/?product=${t.Id}">
      <img
        src="${t.Image}"
        alt="Image of ${t.NameWithoutBrand}"
      />
      <h3 class="card__brand">${t.Brand}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.ListPrice}</p></a>
  </li>`}class n{constructor(r,e,a){this.category=r,this.dataSource=e,this.listElement=a}async init(){let r=await this.dataSource.getData(),e=this.filterProductList(r);console.log(e),this.renderList(e)}renderList(r){c(o,this.listElement,r)}filterProductList(r){return r.filter((e,a)=>a<4)}}const s=document.querySelector(".product-list");console.log(s);const l=new i("tents"),d=new n("tents",l,s);d.init();
