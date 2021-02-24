import React, { Component } from "react";

class InputField extends Component {

    render() {
        const { label, value, type, onChange, isEditable } = this.props;
        
        if (isEditable) {
            return (
                <div>
                    <label>
                        {label}
                        <input type={type} value={value} onChange={onChange} />
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

export default InputField;