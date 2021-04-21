// i want to change what i have in the text
function change() {
  console.log(window.document.getElementById("main"));

  window.document.getElementById("main").outerHTML =
    "<h1 id='main'> HIvthis is a new texst form </h1>";
  let headerText = window.document.getElementById("main");
  console.log(headerText);
  headerText.style.backgroundColor = "orange";
}
// you can skip window. and js will still be happy with it

function multiply() {
  let userNum = document.querySelector("#num").value;
  // console.log(userName);
  let resultText = "";
  for (let i = 1; 1 <= 10; i++) {
    resultText += "${i} * $";
  }
}
