import {useState} from "react";
const WithMassive = () => {
    const [tasks, setTasks] = useState([])
    let [inputValue, setInputValue] = useState('')
    const addTask = (e) => {
        e.preventDefault()
       setTasks([...tasks, inputValue])
        setInputValue('')
    }
    return (

        <div>
            <h1>Bucket list</h1>
            <form>

                <input
                    type={"text"}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={addTask}>Add</button>
                <h1>{tasks.map((task) => (
                    <div key={Math.random()}>
                        <li>{task}</li>
                    </div>
                ))}</h1>
            </form>

        </div>
    )
}
export default WithMassive
