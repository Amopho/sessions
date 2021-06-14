import React, { useState } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };

  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    // const searchText = userText ? userText : "";
    let newArr = data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });
    setFilteredData(newArr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    lookUp();
  };
  return (
    <React.Fragment>
      {
        //<img src={`${process.env.PUBLIC_URL}/${data[0].img}`} alt="Sushi" />
        <FontAwesomeIcon icon={["fab", "apple"]} size="6x" rotation={90} />
      }

      <h1>Welcome to our online store</h1>
      <h3>
        Lets go for a <FaBeer /> with <WiAlien /> when it's
        <WiNightAltThunderstorm />
      </h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ProductList data={userInput ? filteredData : data} />
    </React.Fragment>
  );
}

export default App;
