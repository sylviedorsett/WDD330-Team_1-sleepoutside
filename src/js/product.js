import { getParams } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData();
const productId = getParams("product");
const product = new ProductDetails(productId, dataSource);

product.init();
