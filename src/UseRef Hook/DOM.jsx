import {useRef} from "react";

const Dom = () => {
    const inputRef = useRef(null)
    const clickChange = () => {
        inputRef.current.focus()
        inputRef.current.value = 'Type your user name!'
    }
    return (
        <div>
            <input
            ref={inputRef}
            type="text"/>
            <button onClick={clickChange}>Send</button>
        </div>
    )
}
export default Dom
