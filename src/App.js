import React, { Component } from "react";
import Contact from "./components/Contact"



class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <Contact />
      </div>
    );
  }
}

export default App;
