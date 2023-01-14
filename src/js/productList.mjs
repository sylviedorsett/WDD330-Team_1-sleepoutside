import { renderListWithTemplate } from "./utils.mjs";
//import ProductData from "./ProductData.mjs";

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

// class to generate list of product cards
// in HTML from an array.
export default class productListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        let productsArray = await this.dataSource.getData();
        let filterdArray = this.filterProductList(productsArray);
        console.log(filterdArray);
        this.renderList(filterdArray);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list)
    }

    filterProductList(list) {
      // return list of product whose index is less than 4 
      // from the list of all tents/products.
      return list.filter((item, index) => index < 4)
    }   
}