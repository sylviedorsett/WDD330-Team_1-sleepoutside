import { s as n } from "./utils.32a3215a.js";
function r(t) {
  if (t.ok) return t.json();
  throw new Error("Bad Response");
}
class e {
  constructor(o) {
    (this.category = o), (this.path = `../json/${this.category}.json`);
  }
  getData() {
    return fetch(this.path)
      .then(r)
      .then((o) => o);
  }
  async findProductById(o) {
    return (await this.getData()).find((a) => a.Id === o);
  }
}
const c = new e("tents");
function d(t) {
  n("so-cart", t);
}
async function s(t) {
  const o = await c.findProductById(t.target.dataset.id);
  d(o);
}
document.getElementById("addToCart").addEventListener("click", s);
