import React, { Component } from "react";
import Contact from "./components/Contact"
import Education from "./components/Education";
import Experience from "./components/Experience";
import './styles/app.css';
import './styles/section.css'



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [],
      experience: [],
    }

    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick(e) {
    const name = e.target.name;
    this.setState({
      [name]: [...this.state[name],
        name === "education" 
          ? <Education key={(this.state.education.length + 1).toString()} /> 
          : <Experience key={(this.state.experience.length + 1).toString()}/>
        ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>CV App</h1>
        <div className="page">
          <Contact />
          <h2>Education</h2>
          {this.state.education}
          <button className="add-button" name="education" onClick={this.handleAddClick}>Add</button>
          <h2>Experience</h2>
          {this.state.experience}
          <button className="add-button" name="experience" onClick={this.handleAddClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
