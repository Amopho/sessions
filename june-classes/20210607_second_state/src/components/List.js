import { useEffect } from "react";
const List = ({ setGrowth, log }) => {
  // run when prop changes
  useEffect(() => {
    console.log("I grab the knowledge from outter space");
  }, [log]);

  return (
    <div>
      <button onClick={() => setGrowth((prevState) => prevState - 1)}>-</button>
    </div>
  );
};

export default List;
