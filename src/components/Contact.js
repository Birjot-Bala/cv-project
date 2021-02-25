import React, { Component } from "react";
import InputField from "./InputField";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            editable: true,
        };

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
                        name="name"
                        label="Name: " 
                        value={this.state.name} 
                        type="text" 
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                    <InputField 
                        name="email"
                        label="Email: " 
                        value={this.state.email} 
                        type="email" 
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                    <InputField 
                        name="phone"
                        label="Phone: " 
                        value={this.state.phone} 
                        type= "text" 
                        onChange={this.handleInputChange} 
                        isEditable={isEditable} />
                    {isEditable 
                        ? <input className="submit-button" type="submit" value="Save" />
                        : <button className="edit-button" onClick={this.handleEditClick}>Edit</button>}
                </form>
            </div>
        );
    }
}

export default Contact;