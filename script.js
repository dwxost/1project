var a = document.getElementById("width");
var b = document.getElementById("height");
var button = document.getElementById("button");
var rez = document.getElementById("rez");

button.addEventListener("click", function () {
  rez.value = parseInt(a.value) * parseInt(b.value);
});