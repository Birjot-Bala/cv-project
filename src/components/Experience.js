import React, { Component } from "react";
import InputField from "./InputField";

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

        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleTasksChange = this.handleTasksChange.bind(this);
        this.handleDateFromChange = this.handleDateFromChange.bind(this);
        this.handleDateToChange = this.handleDateToChange.bind(this);

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCompanyChange(e) {
        const copy = Object.assign({}, this.state);
        copy.company = e.target.value;

        this.setState(copy);
    }

    handlePositionChange(e) {
        const copy = Object.assign({}, this.state);
        copy.position = e.target.value;

        this.setState(copy);
    }

    handleTasksChange(e) {
        const copy = Object.assign({}, this.state);
        copy.tasks = e.target.value;

        this.setState(copy);
    }

    handleDateFromChange(e) {
        const copy = Object.assign({}, this.state);
        copy.dateFrom = e.target.value;

        this.setState(copy);
    }

    handleDateToChange(e) {
        const copy = Object.assign({}, this.state);
        copy.dateTo = e.target.value;

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
            <h2>Experience</h2>
            <form onSubmit={this.handleSubmit}>
                <InputField 
                    label="Company: " 
                    value={this.state.company} 
                    type="text"
                    onChange={this.handleCompanyChange} 
                    isEditable={isEditable} />
                <InputField 
                    label="Position: " 
                    value={this.state.position}
                    type="text" 
                    onChange={this.handlePositionChange} 
                    isEditable={isEditable} />
                <InputField 
                    label="Tasks: " 
                    value={this.state.tasks} 
                    type="text"
                    onChange={this.handleTasksChange} 
                    isEditable={isEditable} />
                <InputField
                    label="Start: "
                    value={this.state.dateFrom}
                    type="date"
                    onChange={this.handleDateFromChange}
                    isEditable={isEditable} />
                <InputField
                    label="End: "
                    value={this.state.dateTo}
                    type="date"
                    onChange={this.handleDateToChange}
                    isEditable={isEditable} />
                {isEditable 
                    ? <input type="submit" value="Save" />
                    : <button onClick={this.handleEditClick}>Edit</button>}
            </form>
        </div>
        )
    }
}

export default Experience;