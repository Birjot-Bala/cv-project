import React, { Component } from "react";

class TextInput extends Component {

    render() {
        const { label, value, onChange, isEditable } = this.props;
        
        if (isEditable) {
            return (
                <div>
                    <label>
                        {label}
                        <input type="text" value={value} onChange={onChange} />
                    </label>
                </div>
            );
        } else {
            return (
                <div>
                    {label}
                    <span>{value}</span>
                </div>
            );
        }
    }
}

export default TextInput;