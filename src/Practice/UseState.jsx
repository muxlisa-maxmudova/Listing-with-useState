import {useState} from "react";
const UseState = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount((prevState)=>prevState+1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increment</button>
        </div>
    )
}
export default UseState
