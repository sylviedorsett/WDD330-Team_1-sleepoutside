import { renderListWithTemplate } from "./utils.mjs";
//import ProductData from "./ProductData.mjs";

function productCardTemplate(product) {
    //Use destructoring to enable readable code and pull specific properties from our object
    const {Id, Images, ListPrice, NameWithoutBrand} = product;
    const {Name} = product.Brand;

    return `<li class="product-card">
    <a href="/product_pages/index.html?product=${Id}">
      <img class="card__image"
        src="${Images.PrimarySmall}"
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
        let productsArray = await this.dataSource.getData(this.category);
        // let filterdArray = this.filterProductList(productsArray);
        
        this.renderList(productsArray);
        document.querySelector(".title").innerHTML = this.category[0].toUpperCase() + this.category.substring(1);
        
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list)
    }

    // *sidenote - What if we made a random generator to choose 4 products for us each time, that way we would see some of the other products available, though we will likely be building a search area later, for now I just feel bad we only ever get to see 4 of our products listed. ANy thoughts on the random generator for the 4 chosen?
    // example code: var randomNum = Math.floor(Math.random() * ((list.length + 1) - 4)); return list.slice(randomNum, randomNum + 4);
    // I have tested the above code and it works nicely.
    filterProductList(list) {
      // return list of product whose index is less than 4 
      // from the list of all tents/products.
      return list.filter((item, index) => index < 4)
      
    }   
}