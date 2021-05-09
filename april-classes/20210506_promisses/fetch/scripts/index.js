// fetch

function fetchTextFile() {
  fetch("./plain.txt").then((response) => response.text());
}

function fetchJsonFile() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let user;
    });
}
