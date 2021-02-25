import React, { Component } from "react";
import InputField from "./InputField";
import TextAreaInput from "./TextAreaInput"

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: "",
            position: "",
            tasks: "",
            dateFrom: "",
            dateTo: "",
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
            <div className="section">
                <form onSubmit={this.handleSubmit}>
                    {isEditable 
                        ? <input className="submit-button" type="submit" value="Save" />
                        : <button className="edit-button" onClick={this.handleEditClick}>Edit</button>}
                    <InputField 
                        name="position"
                        label="Position: " 
                        value={this.state.position}
                        type="text" 
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                    <InputField 
                        name="company"
                        label="Company: " 
                        value={this.state.company} 
                        type="text"
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                    <InputField
                        name="dateFrom"
                        label="Start: "
                        value={this.state.dateFrom}
                        type="date"
                        onChange={this.handleInputChange}
                        isEditable={isEditable} />
                    <InputField
                        name="dateTo"
                        label="End: "
                        value={this.state.dateTo}
                        type="date"
                        onChange={this.handleInputChange}
                        isEditable={isEditable} />
                    <TextAreaInput 
                        name="tasks"
                        label="Tasks: " 
                        value={this.state.tasks} 
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                </form>
            </div>
        )
    }
}

export default Experience;