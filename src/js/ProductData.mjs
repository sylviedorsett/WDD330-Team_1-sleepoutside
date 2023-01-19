const baseURL = "http://server-nodejs.cit.byui.edu:3000/";

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
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;   
    // return fetch(this.path)
    //   .then(convertToJson)
    //   .then((data) => data);
  }
  
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const product = await convertToJson(response);
    console.log(product)
    return product.Result;
  }
}
