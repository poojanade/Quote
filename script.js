const Quote = document.getElementById("quote");
const Author = document.getElementById("author");
let container = document.getElementById("container");
let btn = document.getElementById("btn");

let color = ["LightSalmon", "LightCyan", "antiquewhite", "palegreen", "peachpuff", "pink", "slategray", "burlywood", "cornflowerblue", "aqua"];
var colors = ["Red", "Blue", "orange", "purple", "chocolate", "MediumVioletRed", "black", "grey", "crimson", "deeppink"];


function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Quote.innerText = ` ${data.text} `;
      Author.innerText = `- By ${data.author}`;
    });

  let randomcolor = color[Math.floor(Math.random() * color.length)];
  var randomcolors = colors[Math.floor(Math.random() * colors.length)];

  container.style.background = randomcolor;

  document.body.style.background = randomcolors;

  btn.style.background = randomcolors;

  container.style.color = randomcolors;

}
getQuote();