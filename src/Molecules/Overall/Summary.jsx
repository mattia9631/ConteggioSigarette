import React,{useState} from 'react';
import Counter from '../../Atom/Counter/Counter'
import {Button} from 'react-bootstrap'
import './style.css'
const Summary = ()  => {
    const [today,addToday] = useState(0);
    return (
        <div className="summary-container">
            <Counter number={today}></Counter>
            <Button variant="primary" onClick={() => addToday(today+1)}>Primary</Button>
        </div>
    );
}
export default Summary;