(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === "childList")
        for (const s of a.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(n) {
    const a = {};
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerpolicy && (a.referrerPolicy = n.referrerpolicy),
      n.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : n.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = e(n);
    fetch(n.href, a);
  }
})();
function d(r) {
  return JSON.parse(localStorage.getItem(r));
}
function m(r, t) {
  localStorage.setItem(r, JSON.stringify(t));
}
function P(r) {
  const t = window.location.search;
  return new URLSearchParams(t).get(r);
}
function h(r, t, e, o = "afterbegin", n = !1) {
  const a = e.map(r);
  n ? (t.innerHTML = "") : t.insertAdjacentHTML(o, a.join(""));
}
function c(r, t, e, o) {
  t.insertAdjacentHTML("afterbegin", r), o && o(e);
}
async function i(r) {
  let t = await fetch(r);
  if (t.ok) return await t.text();
  throw new Error("Failed to load path.");
}
async function p() {
  let r = await i("/partials/header.html"),
    t = await i("/partials/footer.html"),
    e = document.querySelector("#header"),
    o = document.querySelector("#footer");
  c(r, e), c(t, o), y();
}
function y() {
  let r = d("so-cart"),
    t = document.querySelector("#cart-items-number");
  if (r) {
    let e = 0;
    for (let o in r) e += r[o].Quantity;
    (t.textContent = e), (t.style.display = "block");
  } else t.style.display = "none";
}
const l = "http://server-nodejs.cit.byui.edu:3000/",
  g = "http://server-nodejs.cit.byui.edu:3000/checkout";
let w = ["tents", "backpacks", "hammocks", "sleeping-bags"];
function u(r) {
  if (r.ok) return r.json();
  throw new Error("Bad Response");
}
class S {
  constructor() {}
  async checkout(t) {
    const e = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(t),
      },
      n = await (await fetch(g, e)).json();
    window.alert(`Order Confirmation: ${n.orderId}`);
  }
  async getData(t) {
    const e = await fetch(l + `products/search/${t}`);
    return (await u(e)).Result;
  }
  async findProductById(t) {
    const e = await fetch(`${l}product/${t}`);
    return (await u(e)).Result;
  }
  async findProductBySearchString(t) {
    let e = [];
    for (const o of w) {
      let a = (await this.getData(o)).filter((s) =>
        s.Name.toLowerCase().includes(`${t}`)
      );
      for (const s of a) e.push(s);
    }
    return e;
  }
}
function f(r) {
  const { Id: t, Images: e, Name: o, ListPrice: n, NameWithoutBrand: a } = r;
  return `<li class="product-card">
    <a href="/product_pages/index.html?product=${t}">
      <img
        src="${e.PrimarySmall}"
        alt="Image of ${a}"
      />
      <h3 class="card__brand">${o}</h3>
      <h2 class="card__name">${a}</h2>
      <p class="product-card__price">$${n}</p></a>
  </li>`;
}
class b {
  constructor(t, e, o) {
    (this.category = t),
      (this.dataSource = e),
      (this.listElement = o),
      (this.url = document.URL);
  }
  async init() {
    const t = await this.dataSource.getData(this.category);
    this.renderList(t),
      (document.querySelector(".title").innerHTML =
        this.category[0].toUpperCase() + this.category.substring(1));
    const e = t.length,
      o = document.getElementById("quantity");
    (o.innerHTML = `Product Category > ${e} items`), (o.href = this.url);
  }
  renderList(t) {
    h(f, this.listElement, t);
  }
  filterProductList(t) {
    var e = Math.floor(Math.random() * (t.length + 1 - 4));
    return t.slice(e, e + 4);
  }
}
p().then(() => {
  document.forms[0].addEventListener("submit", () => {
    let r = document.querySelector(".search-input").value;
    m("search-string", r.trim());
  }),
    window.location.href.includes("/product-listing/products-search.html") &&
      L();
});
async function L() {
  let r = d("search-string").toLowerCase();
  const t = new S(),
    e = document.querySelector(".product-list"),
    o = document.querySelector(".title");
  let n = await t.findProductBySearchString(r);
  h(f, e, n), (o.innerHTML = `Showing ${n.length} results for "${r}"`);
}
export { S as E, y as a, P as b, d as g, b as p, m as s };
