import ProductData from "./ProductData.mjs";
import productListing from "./productList.mjs";
import { getParams } from "./utils.mjs";

const category = getParams("category");
const productListUl = document.querySelector(".product-list");
// console.log(productListUl);
const dataSource = new ProductData();
const productList = new productListing(category, dataSource, productListUl);

productList.init();