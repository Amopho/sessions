//Traversing
// Node vs Element NOdes

const ele = document.querySelector("#second").previousElementSibling;
console.log(ele);

const ele2 = document.querySelector("body").firstElementChild;
console.log(ele2);
console.log(ele2.innerHTML);
//firstChild
const mainText = document.querySelector("#text").firstElementChild;
console.log(mainText.textContent);
console.log(mainText.innerText);
console.log(mainText.innerHTML);

// matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  console.log(name.nodeType);
  if (name.matches(".teacher"))
    console.log(`${name.textContent} is a teacher for FBW 48-1`);
});
// querySelector
const allChildren = document.querySelector("body").children;
console.log(allChildren);
let menuList = document.getElementById("menu");
//or querySelctor()
console.log(menuList.lastElementChild);
console.log(menuList.firstElementChild);

// all comments in your html should be printed in console

// type of the node element value
console.log(Node.COMMENT_NODE);

//function that displays following comments
let displComm = function (e) {
  let arr = [];
  for (let i = 0; i < e.childNodes.length; i++) {
    let node = e.childNodes[i];
    if (node.nodeType === 8) {
      arr.push(node);
    } else {
      arr.push.apply(arr, displComm(node));
    }
  }
  return arr;
};

let commentNodes = displComm(document);

console.log(commentNodes[0].nodeValue);

//childNodes
