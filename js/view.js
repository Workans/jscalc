import * as math from "./math.js"

const output = document.querySelector("#output");

document.querySelector("#add-btn").addEventListener("click", function () {
  let value1 = +document.querySelector("#value1").value;
  let value2 = +document.querySelector("#value2").value;
  let result = math.add(value1, value2);
  output.textContent = result;
});
