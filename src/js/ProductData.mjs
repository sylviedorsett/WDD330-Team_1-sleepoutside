function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    //this.category = category;
    this.path = `products/search/${category}`
  }
  async getData(category) {
    const response = await fetch(baseURL + this.path);
    const data = await convertToJson(response);  
    return data.Result;
  }
  
  async findProductById(id) {
    const baseURL = 'http://server-nodejs.cit.byui.edu:3000/'
    const product = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(product);
    return data.Result;
  }
}
