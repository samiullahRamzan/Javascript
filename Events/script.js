const btn = document.getElementById("clickButton1");

// btn.onclick = function (event) {
//   console.log("Button clicked!");
//   console.log("handler1");
// };
// btn.onclick = function (event) {
//   console.log("Button clicked!");
//   console.log("handler2");
// };

btn.addEventListener("click", () => {
  console.log("button clicked");
  console.log("handler1");
});

const handler2 = () => {
  console.log("button clicked");
  console.log("handler2");
};
btn.addEventListener("click", handler2);

btn.removeEventListener("click", handler2);
