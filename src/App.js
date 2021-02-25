import React, { Component } from "react";
import Contact from "./components/Contact"
import Education from "./components/Education";
import Experience from "./components/Experience";
import './styles/app.css';
import './styles/section.css'



class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>CV App</h1>
        <h2>Contact</h2>
        <Contact />
        <h2>Education</h2>
        <Education />
        <h2>Experience</h2>
        <Experience />
      </div>
    );
  }
}

export default App;
