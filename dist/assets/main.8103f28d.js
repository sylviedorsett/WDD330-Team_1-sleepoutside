import{r as o}from"./utils.b4a38d3e.js";function i(e){if(e.ok)return e.json();throw new Error("Bad Response")}class n{constructor(t){this.category=t,this.path=`../json/${this.category}.json`}getData(){return fetch(this.path).then(i).then(t=>t)}async findProductById(t){return(await this.getData()).find(s=>s.Id===t)}}function d(e){const{Id:t,Image:r,ListPrice:s,NameWithoutBrand:a}=e,{Name:c}=e.Brand;return`<li class="product-card">
    <a href="product_pages/?product=${t}">
      <img
        src="${r}"
        alt="Image of ${a}"
      />
      <h3 class="card__brand">${c}</h3>
      <h2 class="card__name">${a}</h2>
      <p class="product-card__price">$${s}</p></a>
  </li>`}class u{constructor(t,r,s){this.category=t,this.dataSource=r,this.listElement=s}async init(){let t=await this.dataSource.getData(),r=this.filterProductList(t);console.log(r),this.renderList(d,r)}renderList(t,r){o(t,this.listElement,r)}filterProductList(t){return t.filter((r,s)=>s<4)}}const l=document.querySelector(".product-list"),h=new n("tents"),p=new u("tents",h,l);p.init();export{n as P};
