(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const n of t.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && i(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(e) {
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
    const t = l(e);
    fetch(e.href, t);
  }
})();
function s(o) {
  return JSON.parse(localStorage.getItem(o));
}
function a(o, r) {
  localStorage.setItem(o, JSON.stringify(r));
}
function c() {
  let o = s("so-cart"),
    r = document.querySelector("#cart-items-number");
  o
    ? ((r.textContent = o.length), (r.style.display = "block"))
    : (r.style.display = "none");
}
c();
export { a, s as g, c as s };
