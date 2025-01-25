const TodoList = () => {
    const tasks = ['Clean the room', 'Do hw', 'Wash the dishes', 'Mop the floor', 'Babysit your siblings', 'Review React', 'Dont touch your freaking phone!']
    return (
        <div>
            {tasks.map((task)=>(
                <ul key={task}>
                  <li style={{color:'deeppink'}}>{task}</li>
                </ul>
                ))}
        </div>
    )
}
export default TodoList
