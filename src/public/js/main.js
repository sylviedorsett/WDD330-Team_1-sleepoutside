import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import Alert from './alert.js';

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);
const alerts = new Alert(); alerts.create();

listing.init();



