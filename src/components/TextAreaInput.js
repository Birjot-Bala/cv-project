import React, { Component } from "react";

class TextAreaInput extends Component {

    render() {
        const { name, label, value, onChange, isEditable } = this.props;
        
        if (isEditable) {
            return (
                <div>
                    <label>
                        {label} 
                        <textarea name={name} value={value} onChange={onChange} />
                    </label>
                </div>
            );
        } else {
            return (
                <div>
                    {label}
                    <textarea readOnly value={value} />
                </div>
            );
        }
    }
}

export default TextAreaInput;