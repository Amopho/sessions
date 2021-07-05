import React from "react";

// React Hooks
// function App() {
//   return <React.Fragment></React.Fragment>;
// }

// export default App;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLogged: false,
      data: { name: "Licia", age: 34 },
    };
  }
  render() {
    console.log("I work inside any method of class component");
    return (
      <div>
        <h1>
          Hi, I am coming from class component {this.state.data.name}, I am{" "}
          {this.state.data.age}
        </h1>
      </div>
    );
  }
}
