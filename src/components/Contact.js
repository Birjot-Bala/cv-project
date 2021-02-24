import React, { Component } from "react";
import TextInput from "./TextInput";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);

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

    handleSubmit(event) {
        alert(this.state.name + this.state.email + this.state.phone);
    }

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <form onSubmit={this.handleSubmit}>
                    <TextInput label="Name: " value={this.state.name} onChange={this.handleNameChange} />
                    <TextInput label="Email: " value={this.state.email} onChange={this.handleEmailChange} />
                    <TextInput label="Phone: " value={this.state.phone} onChange={this.handlePhoneChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Contact;