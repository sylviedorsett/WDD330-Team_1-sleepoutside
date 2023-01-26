import { getLocalStorage } from "./utils.mjs";

const total = Math.trunc(getLocalStorage("total"));
console.log(total);

const numOfItems = getLocalStorage("so-cart").length;


//Calculate the tax
export function calcTax(total) {
    return total * .06;
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


document.getElementById("subtotal").innerHTML = `$${total}`;
document.getElementById("tax").innerHTML = `$${tax}`;
document.getElementById("shipping-estimate").innerHTML = `<strong><em>Please enter your zipcode to calculate shipping and order total.</em></strong>`;

document.getElementById("zipcode").addEventListener("keyup", () => {
    const zip = document.getElementById("zipcode");

    if (zip.checkValidity()) {

        document.getElementById("shipping-estimate").innerHTML = `$${shipping}`//"Please submit form to calculate shipping.";
        document.getElementById("order-total").innerHTML = `$${order_total}`;
    }
});

