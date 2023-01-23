import ProductData from "./ProductData.mjs";
import productList from "./productList.mjs";
import { getParams } from "./utils.mjs";


const category = getParams("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const product_list = new productList(category, dataSource, element);

product_list.init();