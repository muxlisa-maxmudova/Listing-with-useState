const UserGreeting = () => {
    let userName = 'Mukhlisa';
    let date = new Date();
    let month = 'January';
    const getGreeting = () => {
        return `Hello, ${ userName }!`;

    }

    return (
        <div>
            {getGreeting()}
            <p>It is {date.getDate()}th of {month}</p>
        </div>
    )
}

export default UserGreeting
