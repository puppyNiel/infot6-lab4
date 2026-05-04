import { useState } from "react";
import './Counter.css'

export function Counter() {
    const [counter, setCounter] = useState(0);
    
    function increase() {
            setCounter(counter + 1);
        }

    function Decrease() {
            setCounter(counter - 1);
        }

    function Reset() {
            setCounter(0);
        }

    return (
        <div className="counter-container">
            <h3>{counter}</h3>

            <div className="buttons">
                <button onClick={increase}>Increase count</button>
                <button onClick={Decrease}>Decrease count</button>
                <button onClick={Reset}>Reset</button>
            </div>
            
        </div>
    );
}