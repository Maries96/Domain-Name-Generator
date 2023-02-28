/* eslint-disable */
window.onload = () => {
  document.querySelector("h2").innerHTML = generateDomains();
};

function generateDomains() {
  let pronoun = ["the", "our", "a", "one"];
  let adj = ["great", "fearless", "scandalous", "flamboyant"];
  let noun = ["boxer", "racoon", "croissant", "potato"];

  let domains = [];
  for (let x of pronoun) {
    for (let y of adj) {
      for (let z of noun) {
        domains.push(x + y + z);
      }
    }
  }
  return domains.map(item => `<li>${item}</li>`).join("");
}
