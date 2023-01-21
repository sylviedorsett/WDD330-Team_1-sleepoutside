import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    //Use destructoring to enable readable code and pull specific properties from our object
    const {Id, Image, ListPrice, NameWithoutBrand} = product;
    const {Name} = product.Brand;

    return `<li class="product-card">
    <a href="product_pages/?product=${Id}">
      <img
        src="${Image}"
        alt="Image of ${NameWithoutBrand}"
      />
      <h3 class="card__brand">${Name}</h3>
      <h2 class="card__name">${NameWithoutBrand}</h2>
      <p class="product-card__price">$${ListPrice}</p></a>
  </li>`
}

export default class productList {
// class to generate list of product card in HTML from an array.
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const productList = await this.dataSource.getData(this.category);
        //let filterdArray = this.filterProductList(productList);
        this.renderList(productList);
        //set title to current category
        document.querySelector(".title").innerHTML = this.category;
    }

    renderList(productList) {
        renderListWithTemplate(productCardTemplate, this.listElement, productList)
    }

    filterProductList(list) {
      // return random list of product whose index is less than 4 
      // from the list of all tents/products.
      var randomNum = Math.floor(Math.random() * ((list.length + 1) - 4));
      return list.slice(randomNum, randomNum + 4);
    }   
    
}