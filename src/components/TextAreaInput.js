import React, { Component } from "react";

class TextAreaInput extends Component {

    render() {
        const { name, label, value, onChange, isEditable } = this.props;
        
        if (isEditable) {
            return (
                <div>
                    <label>
                        {label} 
                        <textarea name={name} value={value} onChange={onChange} wrap="hard" />
                    </label>
                </div>
            );
        } else {
            return (
                <div>
                    <textarea className="read-only-text" readOnly value={value} wrap="hard" />
                </div>
            );
        }
    }
}

export default TextAreaInput;