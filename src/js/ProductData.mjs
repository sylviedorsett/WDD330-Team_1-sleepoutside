const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
let categories = ["tents", "backpacks", "hammocks", "sleeping-bags"];

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {
  }
  
  async getData(category) {
    const response = await fetch(baseURL +`products/search/${category}`);
    const data = await convertToJson(response);  
    return data.Result;
  }
  
  async findProductById(id) {
    const product = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(product);
    return data.Result;
  }

  // Fetch all data in the database that matches the searchstring from all categories.. 
  async findProductBySearchString(searchString) {
  let allProducts = [];
  for (const category of categories) {
      const products = await this.getData(category);

      // filter products that have the users search strings in the product name.
      let match = products.filter(element => element.Name.toLowerCase().includes(`${searchString}`));
      for (const item of match) {
          allProducts.push(item)
      }
  }
  return allProducts;
}
}
