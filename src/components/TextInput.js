import React, { Component } from "react";

class TextInput extends Component {

    render() {
        const { label, value, onChange } = this.props;

        return (
            <label>
                {label}
                <input type="text" value={value} onChange={onChange} />
            </label>
        );
    }
}

export default TextInput;