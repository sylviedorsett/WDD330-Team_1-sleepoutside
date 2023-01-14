(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const s of t.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
function a(o) {
  return JSON.parse(localStorage.getItem(o));
}
function c(o, r) {
  localStorage.setItem(o, JSON.stringify(r));
}
function l() {
  const o = window.location.search;
  return new URLSearchParams(o).get("product");
}
function u(o, r, n, i = "afterbegin", e = !1) {
  const t = n.map(o);
  e ? (r.innerHTML = "") : r.insertAdjacentHTML(i, t.join(""));
}
export { l as a, a as g, u as r, c as s };
