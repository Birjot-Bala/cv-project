import React, { Component } from "react";
import InputField from "./InputField";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: "",
            study: "",
            date: "",
            editable: true,
        }

        this.handleSchoolChange = this.handleSchoolChange.bind(this);
        this.handleStudyChange = this.handleStudyChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSchoolChange(e) {
        const copy = Object.assign({}, this.state);
        copy.school = e.target.value;

        this.setState(copy);
    }

    handleStudyChange(e) {
        const copy = Object.assign({}, this.state);
        copy.study = e.target.value;

        this.setState(copy);
    }

    handleDateChange(e) {
        const copy = Object.assign({}, this.state);
        copy.date = e.target.value;

        this.setState(copy);
    }

    handleEditClick(e) {
        const copy = Object.assign({}, this.state);
        copy.editable = true;

        this.setState(copy);
    }

    handleSubmit(e) {
        const copy = Object.assign({}, this.state);
        copy.editable = false;

        this.setState(copy);

        e.preventDefault();
    }

    render() {
        const isEditable = this.state.editable;

        return (
            <div>
            <h2>Education</h2>
            <form onSubmit={this.handleSubmit}>
                <InputField 
                    label="School: " 
                    value={this.state.school} 
                    type="text"
                    onChange={this.handleSchoolChange} 
                    isEditable={isEditable} />
                <InputField 
                    label="Study: " 
                    value={this.state.study}
                    type="text" 
                    onChange={this.handleStudyChange} 
                    isEditable={isEditable} />
                <InputField 
                    label="Date: " 
                    value={this.state.date} 
                    type="date"
                    onChange={this.handleDateChange} 
                    isEditable={isEditable} />
                {isEditable 
                    ? <input type="submit" value="Save" />
                    : <button onClick={this.handleEditClick}>Edit</button>}
            </form>
        </div>
        )
    }
}

export default Education;