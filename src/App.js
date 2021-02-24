import React, { Component } from "react";
import Contact from "./components/Contact"
import Education from "./components/Education";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Contact />
        <Education />
      </div>
    );
  }
}

export default App;
