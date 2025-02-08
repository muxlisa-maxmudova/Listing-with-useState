import {useState, useRef} from "react";

const SetTimers = () => {
    const [count, setCount] = useState(0)
    const timeRef = useRef(null)
    const startTimer = () => {
        if(!timeRef.current) {
            timeRef.current = setInterval(()=>setCount((count)=>count + 1),
                1000)
        }
    }
    const stopTimer = () => {
        clearInterval(timeRef.current)
        timeRef.current=null
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}
export default SetTimers
