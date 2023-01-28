import { g as r, E as l } from "./main.8cfc34a6.js";
const u = new l(),
  i = r("total"),
  p = r("so-cart").length,
  o = r("so-cart");
function g(t) {
  return t * 0.06;
}
const c = g(i);
function y(t) {
  return 10 + (t - 1) * 2;
}
const a = y(p);
function f(t, e, n) {
  return t + e + n;
}
const m = f(i, c, a);
document.getElementById("subtotal").innerHTML = `$${i.toFixed(2)}`;
document.getElementById("tax").innerHTML = `$${c.toFixed(2)}`;
document.getElementById("shipping-estimate").innerHTML =
  "<strong><em>Please enter your zipcode to calculate shipping and order total.</em></strong>";
document.getElementById("zipcode").addEventListener("keyup", () => {
  document.getElementById("zipcode").checkValidity() &&
    ((document.getElementById("shipping-estimate").innerHTML = `$${a}`),
    (document.getElementById("order-total").innerHTML = `$${m.toFixed(2)}`));
});
const d = document.getElementById("checkout-form");
d.addEventListener("submit", (t) => {
  t.preventDefault();
  const e = h(d);
  u.checkout(e);
});
function h(t) {
  let e = new FormData(t),
    n = {};
  for (const s of e.keys()) n[s] = e.get(s);
  return (
    (n.orderDate = new Date()),
    (n.orderTotal = m),
    (n.shipping = a),
    (n.tax = c),
    (n.items = E(n)),
    n
  );
}
function E(t) {
  t = [];
  for (let e in o)
    t[e] = {
      id: o[e].Id,
      name: o[e].Brand.Name,
      price: o[e].ListPrice,
      quantity: 1,
    };
  return t;
}
