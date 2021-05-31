// Hook
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  console.log(props);
  const [userInput, setUserInput] = useState("");
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    // prevState - value of the last state before the recent update
    if (userInput != "") {
      props.setList((prevState) => [
        ...prevState,
        { id: prevState.length, title: userInput.trim(), done: false },
      ]);
      setUserInput("");
    } else {
      setUserInput("");
    }
  }
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={userInput} onChange={changeHandle} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default List;
