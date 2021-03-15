import React,{useState} from 'react';
import Counter from '../../Atom/Counter/Counter'
import Button from '../../Atom/Button/Button'
import './style.css'
const Summary = ()  => {
    const [today,addToday] = useState(parseInt(localStorage.getItem('today')) || 0);
    const aggiungiSigaretta = () => {
        addToday(today + 1);
        localStorage.setItem("today", today);
    }
    return (
        <div className="summary-container">
            <Counter number={today}></Counter>
            <Button func={() => aggiungiSigaretta()} text="Aggiungi"></Button>
        </div>
    );
}
export default Summary;