// checks if the sorting is by name or price
function sortProducts(sortBy) {
    if (sortBy === "name") {
      sortByNameAsc(products);
    } else if (sortBy === "price") {
      sortByPriceAsc(products);
    }
}
  