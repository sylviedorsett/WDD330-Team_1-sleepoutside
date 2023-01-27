import {getLocalStorage} from "./utils.mjs";

const baseURL = "http://server-nodejs.cit.byui.edu:3000/";
const checkoutURL = "http://server-nodejs.cit.byui.edu:3000/checkout";
let categories = ["tents", "backpacks", "hammocks", "sleeping-bags"];

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor() {
  }

  async checkout(form){
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify(form)
    }

    const response = await fetch(checkoutURL, options);
    const data = await response.json();
    //Convert the response to json to be able to see it in the console.
    // console.log(data);

    window.alert(`Order Confirmation: ${data.orderId}`)
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
