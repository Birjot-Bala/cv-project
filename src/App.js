import React, { Component } from "react";
import Contact from "./components/Contact"
import Education from "./components/Education";
import Experience from "./components/Experience";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Contact />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
