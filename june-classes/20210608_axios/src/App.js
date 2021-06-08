import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import "./App.css";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
  }

  let endpoint = "";

  axios(endPoint).then((res) => console.log(res));

  // fetch(endPoint)
  //   .then((res) => res.json())
  //   .then((data) => setResults(data));

  return <React.Fragment></React.Fragment>;
};

export default App;
