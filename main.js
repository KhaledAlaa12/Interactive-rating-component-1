let myRates = document.querySelectorAll(".rate");
let value;
myRates.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      myRates.forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      el.classList.add("active");
    }
  });
});
let button = document.querySelector("button");
let box = document.querySelector(".box");

let img = document.createElement("img");
img.src = "images/illustration-thank-you.svg";

let span = document.createElement("span");

let heading = document.createElement("h2");
heading.innerHTML = `Thank You`;

let p = document.createElement("p");
p.innerHTML =
  "We appreciate you taking the time to give a rating.If you ever need more support, don’t hesitate to get in touch!";
button.addEventListener("click", function () {
  value = document.querySelector(".active").getAttribute("rate");
  span.innerHTML = `You selected ${value} out of 5`;
  box.classList.add("ty");
  box.innerHTML = "";
  box.appendChild(img);
  box.appendChild(span);
  box.appendChild(heading);
  box.appendChild(p);
});
