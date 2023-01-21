import ProductData from "./ProductData.mjs";
import productList from "./productList.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";

loadHeaderFooter();

const category = getParams("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const product_list = new productList(category, dataSource, element);

product_list.init();