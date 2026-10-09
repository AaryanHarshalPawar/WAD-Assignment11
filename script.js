let count = 0;
const btn = document.getElementById("btn");
const text = document.getElementById("count");

btn.addEventListener("click", () => {
  count++;
  text.textContent = "Button clicked " + count + " times";
});
