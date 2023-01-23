(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && a(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function m(t) {
  let e = c("so-cart");
  e === null && (e = []), e.push(t), f("so-cart", e);
}
function u() {
  let t = c("so-cart"),
    e = document.querySelector("#cart-items-number");
  t
    ? ((e.textContent = t.length), (e.style.display = "block"))
    : (e.style.display = "none");
}
function c(t) {
  return JSON.parse(localStorage.getItem(t));
}
function f(t, e) {
  localStorage.setItem(t, JSON.stringify(e));
}
function p() {
  const t = window.location.search;
  return new URLSearchParams(t).get("product");
}
function y(t, e, n, a = "afterbegin", r = !1) {
  const o = n.map(t);
  r ? (e.innerHTML = "") : e.insertAdjacentHTML(a, o.join(""));
}
function l(t, e, n, a) {
  e.insertAdjacentHTML("afterbegin", t), a && a(n);
}
async function s(t) {
  let e = await fetch(t);
  if (e.ok) return await e.text();
  throw new Error("Failed to load path.");
}
async function d() {
  let t = await s("/partials/header.html"),
    e = await s("/partials/footer.html"),
    n = document.querySelector("#header"),
    a = document.querySelector("#footer");
  l(t, n), l(e, a), u();
}
d();
export { p as a, m as b, c as g, y as r, u as s };
