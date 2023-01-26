import { getLocalStorage} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";


//Create a new ExternalServices Object
const service = new ExternalServices();


//Get Local Storage Information
const total = getLocalStorage("total");
const numOfItems = getLocalStorage("so-cart").length;
const itemsArray = getLocalStorage("so-cart");


//Calculate the tax
export function calcTax(total) {
    let mytotal = total * .06;
    return mytotal;
}
const tax = calcTax(total);


//Calculate Shipping
export function calcShipping(numOfItems) {
    let shipping = 10 + (numOfItems-1) * 2;
    return shipping;
}
const shipping = calcShipping(numOfItems);


//calculate the order total 
export function orderTotal(total, tax, shipping) {
    return total + tax + shipping;
}
const order_total = orderTotal(total, tax, shipping);


//Populate the Cart Summary Div
document.getElementById("subtotal").innerHTML = `$${total.toFixed(2)}`;
document.getElementById("tax").innerHTML = `$${tax.toFixed(2)}`;
document.getElementById("shipping-estimate").innerHTML = `<strong><em>Please enter your zipcode to calculate shipping and order total.</em></strong>`;

//Populate the Cart Summary Shipping and Order Total AFTER a zipcode is entered
document.getElementById("zipcode").addEventListener("keyup", () => {
    const zip = document.getElementById("zipcode");

    if (zip.checkValidity()) {
        document.getElementById("shipping-estimate").innerHTML = `$${shipping}`//"Please submit form to calculate shipping.";
        document.getElementById("order-total").innerHTML = `$${order_total.toFixed(2)}`;
    }
});


//function to create a JSON object populated with the input from the form
const form = document.getElementById("checkout-form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const payload = convertFormToJSON(form);
    console.log(payload);
    service.checkout(payload);
});

//A Function that makes a new FormData Object for the form 
export function convertFormToJSON (form) {
    let formObject = new FormData(form);
    let jsonObject = {};
    
    for (const key of formObject.keys()) {
        jsonObject[key] = formObject.get(key);
    };

    jsonObject["orderTotal"] = order_total;
    jsonObject["shipping"] = shipping;
    jsonObject["tax"] = tax;
    jsonObject["items"] = packageForm(jsonObject);
    
    return jsonObject;
};


//A function that renders the Items array content and adds it to the FormData Object
export function packageForm(myObject) {
    myObject = [];
    for (let item in itemsArray) {
        myObject[item] = {"id":itemsArray[item].Id, "name": itemsArray[item].Brand.Name, "price": itemsArray[item].ListPrice, "quantity": 1};
    } 
    return myObject;
}