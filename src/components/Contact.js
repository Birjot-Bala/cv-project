import React, { Component } from "react";
import TextInput from "./TextInput";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            editable: true,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        // Shallow copy of state
        const copy = Object.assign({}, this.state);
        copy.name = e.target.value;

        this.setState(copy);
    }

    handleEmailChange(e) {
        const copy = Object.assign({}, this.state);
        copy.email = e.target.value;

        this.setState(copy);
    }

    handlePhoneChange(e) {
        const copy = Object.assign({}, this.state);
        copy.phone = e.target.value;

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
                <h2>Contact</h2>
                <form onSubmit={this.handleSubmit}>
                    <TextInput label="Name: " value={this.state.name} onChange={this.handleNameChange} isEditable={isEditable} />
                    <TextInput label="Email: " value={this.state.email} onChange={this.handleEmailChange} isEditable={isEditable} />
                    <TextInput label="Phone: " value={this.state.phone} onChange={this.handlePhoneChange} isEditable={isEditable} />
                    {isEditable 
                        ? <input type="submit" value="Save" />
                        : <button onClick={this.handleEditClick}>Edit</button>}
                </form>
            </div>
        );
    }
}

export default Contact;