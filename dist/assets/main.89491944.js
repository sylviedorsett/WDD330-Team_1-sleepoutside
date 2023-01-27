(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const s of a.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = r(o);
    fetch(o.href, a);
  }
})();
function d(e) {
  return JSON.parse(localStorage.getItem(e));
}
function m(e, t) {
  localStorage.setItem(e, JSON.stringify(t));
}
function P(e) {
  const t = window.location.search;
  return new URLSearchParams(t).get(e);
}
function h(e, t, r, n = "afterbegin", o = !1) {
  const a = r.map(e);
  o ? (t.innerHTML = "") : t.insertAdjacentHTML(n, a.join(""));
}
function c(e, t, r, n) {
  t.insertAdjacentHTML("afterbegin", e), n && n(r);
}
async function i(e) {
  let t = await fetch(e);
  if (t.ok) return await t.text();
  throw new Error("Failed to load path.");
}
async function p() {
  let e = await i("/partials/header.html"),
    t = await i("/partials/footer.html"),
    r = document.querySelector("#header"),
    n = document.querySelector("#footer");
  c(e, r), c(t, n), g();
}
function g() {
  let e = d("so-cart"),
    t = document.querySelector("#cart-items-number");
  e
    ? ((t.textContent = e.length), (t.style.display = "block"))
    : (t.style.display = "none");
}
const l = "http://server-nodejs.cit.byui.edu:3000/",
  y = "http://server-nodejs.cit.byui.edu:3000/checkout";
let w = ["tents", "backpacks", "hammocks", "sleeping-bags"];
function u(e) {
  if (e.ok) return e.json();
  throw new Error("Bad Response");
}
class S {
  constructor() {}
  async checkout(t) {
    const r = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(t),
      },
      o = await (await fetch(y, r)).json();
    console.log(o), window.alert(`Order Confirmation: ${o.orderId}`);
  }
  async getData(t) {
    const r = await fetch(l + `products/search/${t}`);
    return (await u(r)).Result;
  }
  async findProductById(t) {
    const r = await fetch(`${l}product/${t}`);
    return (await u(r)).Result;
  }
  async findProductBySearchString(t) {
    let r = [];
    for (const n of w) {
      let a = (await this.getData(n)).filter((s) =>
        s.Name.toLowerCase().includes(`${t}`)
      );
      for (const s of a) r.push(s);
    }
    return r;
  }
}
function f(e) {
  const { Id: t, Images: r, Name: n, ListPrice: o, NameWithoutBrand: a } = e;
  return `<li class="product-card">
    <a href="/product_pages/index.html?product=${t}">
      <img
        src="${r.PrimarySmall}"
        alt="Image of ${a}"
      />
      <h3 class="card__brand">${n}</h3>
      <h2 class="card__name">${a}</h2>
      <p class="product-card__price">$${o}</p></a>
  </li>`;
}
class b {
  constructor(t, r, n) {
    (this.category = t),
      (this.dataSource = r),
      (this.listElement = n),
      (this.url = document.URL);
  }
  async init() {
    const t = await this.dataSource.getData(this.category);
    this.renderList(t),
      (document.querySelector(".title").innerHTML =
        this.category[0].toUpperCase() + this.category.substring(1));
    const r = t.length,
      n = document.getElementById("quantity");
    (n.innerHTML = `Product Category > ${r} items`), (n.href = this.url);
  }
  renderList(t) {
    h(f, this.listElement, t);
  }
  filterProductList(t) {
    var r = Math.floor(Math.random() * (t.length + 1 - 4));
    return t.slice(r, r + 4);
  }
}
p().then(() => {
  document.forms[0].addEventListener("submit", () => {
    let e = document.querySelector(".search-input").value;
    m("search-string", e.trim());
  }),
    window.location.href.includes("/product-listing/products-search.html") &&
      L();
});
async function L() {
  let e = d("search-string").toLowerCase();
  const t = new S(),
    r = document.querySelector(".product-list"),
    n = document.querySelector(".title");
  let o = await t.findProductBySearchString(e);
  h(f, r, o), (n.innerHTML = `Showing ${o.length} results for "${e}"`);
}
export { S as E, g as a, P as b, d as g, b as p, m as s };
