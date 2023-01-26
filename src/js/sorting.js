// imports products from productList module
import { productCardTemplate } from "./productList.mjs";

// CHECKS IF THE SORTING IS BY NAME OR PRICE
function sortProducts(sortBy) {
    if (sortBy === "name") {
      sortByNameAsc(products);
    } else if (sortBy === "price") {
      sortByPriceAsc(products);
    }
}

// SORTS BY NAME
function sortByNameAsc(products) {
  const products = productCardTemplate();

  // sort the products by name
  products.sort((a, b) => {
    if (a.Name < b.Name) {
      return -1;
    }
    if (a.Name > b.Name) {
      return 1;
    }
    return 0;
  });

  return products;
}

// SORTS BY PRICE
function sortByPriceAsc(products) {
  const products = productCardTemplate();

  // sort the products by price
  products.sort((a, b) => {
    return a.FinalPrice - b.FinalPrice;
  });

  return products;
}

