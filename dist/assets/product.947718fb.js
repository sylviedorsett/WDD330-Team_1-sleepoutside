import { g as a, s as o } from "./utils.7f2562c3.js";
function l(e) {
  let t = a("so-cart");
  t === null && (t = []), t.push(e), o("so-cart", t);
}
function s() {
  let e = a("so-cart"),
    t = document.querySelector("#cart-items-number");
  e
    ? ((t.textContent = e.length), (t.style.display = "block"))
    : (t.style.display = "none");
}
s();
export { l as a, s };
