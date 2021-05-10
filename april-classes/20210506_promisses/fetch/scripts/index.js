// fetch

function fetchTextFile() {
  fetch("./plain.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.querySelector(".result").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function fetchJsonFile() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let user;
    });
}
