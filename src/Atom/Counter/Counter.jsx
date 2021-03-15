import React from 'react';
import './style.css'
const Counter = ({number})  => {
    return (
        <div className="counter-container">
        <span className="prova">{number}</span>
        </div>
    );
}
export default Counter;