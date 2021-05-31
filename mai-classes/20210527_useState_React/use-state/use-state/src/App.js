import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import List from "./component/List";
import ToDos from "./component/ToDos";

function App() {
  const [list, setList] = useState([]);
  const remove = (itemToRemove) => {
    const newArr = list.filter((item) => item.id !== itemToRemove);
    console.log(newArr);
    setList(newArr);
  };
  const check = (itemToCheck) => {
    // itemCheck has a unique number
    console.log(itemToCheck);
    setList((prevState) => {
      prevState.filter((item) => {
        if (item.id === itemToCheck) {
          // reverse done
          item.done = !item.done;
        }
        return item;
      });
    });
    console.log(list);
  };
  return (
    <React.Fragment>
      <Header />
      <List setList={setList} />
      <ToDos list={list} remove={remove} check={check} />
      <Footer />
    </React.Fragment>
  );
}
export default App;
