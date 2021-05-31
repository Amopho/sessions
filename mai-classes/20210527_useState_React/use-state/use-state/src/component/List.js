// Hook
import { useState } from "react";

const List = (props) => {
  console.log(props);
  const [userInput, setUserInput] = useState("");
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    //
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
