import { s as n, g as r, a as e } from "./main.1fbf0fad.js";
function s(a) {
  if (a.ok) return a.json();
  throw new Error("Bad Response");
}
class c {
  constructor(t) {
    (this.category = t), (this.path = `../json/${this.category}.json`);
  }
  getData() {
    return fetch(this.path)
      .then(s)
      .then((t) => t);
  }
  async findProductById(t) {
    return (await this.getData()).find((o) => o.Id === t);
  }
}
const d = new c("tents");
function i(a) {
  let t = r("so-cart");
  t === null && (t = []), t.push(a), e("so-cart", t);
}
async function u(a) {
  const t = await d.findProductById(a.target.dataset.id);
  i(t), n();
}
document.getElementById("addToCart").addEventListener("click", u);
