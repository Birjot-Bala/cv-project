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

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
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
                <form onSubmit={this.handleSubmit}>
                    <InputField 
                        name="school"
                        label="School: " 
                        value={this.state.school} 
                        type="text"
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                    <InputField 
                        name="study"
                        label="Study: " 
                        value={this.state.study}
                        type="text" 
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                    <InputField 
                        name="date"
                        label="Date: " 
                        value={this.state.date} 
                        type="date"
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                    {isEditable 
                        ? <input className="submit-button" type="submit" value="Save" />
                        : <button className="edit-button" onClick={this.handleEditClick}>Edit</button>}
                </form>
            </div>
        )
    }
}

export default Education;