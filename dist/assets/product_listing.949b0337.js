import{r as o,b as i}from"./main.f60ce63e.js";/* empty css              */import{P as n}from"./ProductData.24194744.js";function d(a){const{Id:t,Images:r,Name:e,ListPrice:c,NameWithoutBrand:s}=a;return`<li class="product-card">
    <a href="/product_pages/index.html?product=${t}">
      <img
        src="${r.PrimarySmall}"
        alt="Image of ${s}"
      />
      <h3 class="card__brand">${e}</h3>
      <h2 class="card__name">${s}</h2>
      <p class="product-card__price">$${c}</p></a>
  </li>`}class l{constructor(t,r,e){this.category=t,this.dataSource=r,this.listElement=e}async init(){const t=await this.dataSource.getData(this.category);this.renderList(t),document.querySelector(".title").innerHTML=this.category[0].toUpperCase()+this.category.substring(1)}renderList(t){o(d,this.listElement,t)}filterProductList(t){var r=Math.floor(Math.random()*(t.length+1-4));return t.slice(r,r+4)}}const m=i("category"),u=new n,h=document.querySelector(".product-list"),p=new l(m,u,h);p.init();
