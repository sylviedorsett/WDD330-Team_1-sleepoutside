import{r as o}from"./utils.7f2562c3.js";function i(r){if(r.ok)return r.json();throw new Error("Bad Response")}class c{constructor(t){this.category=t,this.path=`../json/${this.category}.json`}getData(){return fetch(this.path).then(i).then(t=>t)}async findProductById(t){return(await this.getData()).find(s=>s.Id===t)}}function n(r){return`<li class="product-card">
    <a href="product_pages/?product=${r.Id}">
      <img
        src="${r.Image}"
        alt="Image of ${r.NameWithoutBrand}"
      />
      <h3 class="card__brand">${r.Brand}</h3>
      <h2 class="card__name">${r.NameWithoutBrand}</h2>
      <p class="product-card__price">$${r.ListPrice}</p></a>
  </li>`}class d{constructor(t,e,s){this.category=t,this.dataSource=e,this.listElement=s}async init(){let t=await this.dataSource.getData(),e=this.filterProductList(t);console.log(e),this.renderList(e)}renderList(t){o(n,this.listElement,t)}filterProductList(t){return t.filter((e,s)=>s<4)}}const a=document.querySelector(".product-list");console.log(a);const l=new c("tents"),u=new d("tents",l,a);u.init();export{c as P};
