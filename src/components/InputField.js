import React, { Component } from "react";

class InputField extends Component {

    render() {
        const { name, label, value, type, onChange, isEditable } = this.props;
        
        if (isEditable) {
            return (
                <div>
                    <label>
                        {label}
                        <input name={name} type={type} value={value} onChange={onChange} />
                    </label>
                </div>
            );
        } else {
            return (
                <div>
                    <span className={name}>{value}</span>
                </div>
            );
        }
    }
}

export default InputField;