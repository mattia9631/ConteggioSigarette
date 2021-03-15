import React from 'react';
import './style.css'
const Button = ({func,text})  => {
    return (
        <div 
            className="button-component"
            onClick={func}
        >
            <span className="button-label">{text}</span>
        </div>
    );
}
export default Button;