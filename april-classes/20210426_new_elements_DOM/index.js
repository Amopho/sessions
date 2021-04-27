// newLi.style.color = colorGen();

// listItems.forEach;

// const colorGen = () => {
//   let result = "#";
//   let colorCode = "0123456789ABCDEF";
//   for (let i = 0; i <= 6; i++) {
//     result += colorCode[Math.random() * 16];
//   }
//   return result;
// };

// // two buttons for done or delete
// const newContainer = document.createElement("div");
// const doneButton = document.createElement("button");
// const deleteButton = document.createElement("");

// document.querySelector;

const create = () => {
  // 1.step
  const newElement = document.createElement("div");
  const newText = document.createTextNode("I am a new element");
  //2step
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = (e) => {
  // single page application- there is no place to send, submitted data, we are preventing the form from doing it
  e.preventDefeult();
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  //CHecking input if is a text
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    // Adding random color to list item
    newLi.style.color = colorGen();
    document.querySelector(".result");
    // adding class
    doneButton.addEventListener("done");
    newLi.append;
  }
};
// document.querySelector("form").addEventListener("submit", addToList);
// // 2 properties funcyion which function I am listening, and second which it woiuld return
