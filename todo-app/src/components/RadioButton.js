import React, { useState } from 'react';
import './style.css'
import Spacer from './Spacer';

function RadioButton(props) {
    const [isChecked, setIsChecked] = useState(props.checked)

    return (
        <div
            className={isChecked ? 'radio-button-filled' : 'radio-button'}
            onClick={() => {
                if (isChecked) { return }
                setIsChecked(true)
                props.onCheck()
            }}
        >
            <Spacer />
            { isChecked ? "✓" : "" }
            <Spacer />
        </div>
    );
}

export default RadioButton;