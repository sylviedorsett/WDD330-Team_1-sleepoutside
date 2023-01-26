(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === "childList")
        for (const s of n.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const n = {};
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerpolicy && (n.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (n.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = r(o);
    fetch(o.href, n);
  }
})();
function d(e) {
  return JSON.parse(localStorage.getItem(e));
}
function m(e, t) {
  localStorage.setItem(e, JSON.stringify(t));
}
function L(e) {
  const t = window.location.search;
  return new URLSearchParams(t).get(e);
}
function f(e, t, r, a = "afterbegin", o = !1) {
  const n = r.map(e);
  o ? (t.innerHTML = "") : t.insertAdjacentHTML(a, n.join(""));
}
function c(e, t, r, a) {
  t.insertAdjacentHTML("afterbegin", e), a && a(r);
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
    a = document.querySelector("#footer");
  c(e, r), c(t, a), g();
}
function g() {
  let e = d("so-cart"),
    t = document.querySelector("#cart-items-number");
  e
    ? ((t.textContent = e.length), (t.style.display = "block"))
    : (t.style.display = "none");
}
const l = "http://server-nodejs.cit.byui.edu:3000/";
let y = ["tents", "backpacks", "hammocks", "sleeping-bags"];
function u(e) {
  if (e.ok) return e.json();
  throw new Error("Bad Response");
}
class S {
  constructor() {}
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
    for (const a of y) {
      let n = (await this.getData(a)).filter((s) =>
        s.Name.toLowerCase().includes(`${t}`)
      );
      for (const s of n) r.push(s);
    }
    return r;
  }
}
function h(e) {
  const { Id: t, Images: r, Name: a, ListPrice: o, NameWithoutBrand: n } = e;
  return `<li class="product-card">
    <a href="/product_pages/index.html?product=${t}">
      <img
        src="${r.PrimarySmall}"
        alt="Image of ${n}"
      />
      <h3 class="card__brand">${a}</h3>
      <h2 class="card__name">${n}</h2>
      <p class="product-card__price">$${o}</p></a>
  </li>`;
}
class P {
  constructor(t, r, a) {
    (this.category = t), (this.dataSource = r), (this.listElement = a);
  }
  async init() {
    const t = await this.dataSource.getData(this.category);
    this.renderList(t),
      (document.querySelector(".title").innerHTML =
        this.category[0].toUpperCase() + this.category.substring(1));
  }
  renderList(t) {
    f(h, this.listElement, t);
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
      w();
});
async function w() {
  let e = d("search-string").toLowerCase();
  const t = new S(),
    r = document.querySelector(".product-list"),
    a = document.querySelector(".title");
  let o = await t.findProductBySearchString(e);
  f(h, r, o), (a.innerHTML = `Showing ${o.length} results for "${e}"`);
}
export { S as P, g as a, L as b, d as g, P as p, m as s };
