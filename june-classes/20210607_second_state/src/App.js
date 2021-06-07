import React, { useState, useEffect } from "react";
import List from "./components/List";

function App() {
  const [growth, setGrowth] = useState(0);
  /* Run only once on MOUNT - component birth, runs only on MOUNT -because of ... , []); */
  useEffect(() => {
    console.log("I ve just arrived");
  }, []);
  // stop useEffect
  useEffect(() => {
    console.log("I ve just arrived");
  }, []);
  // Run every time when state changes - w/o []
  useEffect(() => {
    console.log("grow and learn");
  });

  function growHandle() {
    setGrowth(growth + 100);
  }

  return (
    <React.Fragment>
      <h2>Use Effect</h2>
      {/* remounting/ mounting an update - */}
      <h3>size: {growth}</h3>
      <button onClick={growHandle}>remounting</button>
      {/* run useEffect on prop change */}
      <List setGrowth={setGrowth} log={log} />
    </React.Fragment>
  );
}

export default App;
