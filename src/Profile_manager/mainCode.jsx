import {useState} from "react";

const MainCode = (props) => {
    const [user, setUser] = useState([{
        userName:'qwerty3',
        name:'Mukhlisa',
        surname:'Maxmudova',
        nationality:'Uzbek',
        Job:'student',
    }]);
    const [input, setInput] = useState('');
    const update=(e)=> {
        e.preventDefault();
        const change = {
            ...user,
            userName:input,
        }
        setUser(change)
    }
    return (
        <div style={{textAlign:'center'}}>
            {user.map((element)=>(
                <ul key={element.userName}>
                    <p style={{fontFamily: 'sans-serif'}}>userName: {element.userName}</p>
                    <p style={{fontFamily: 'sans-serif'}}>Name: {element.name}</p>
                    <p style={{fontFamily: 'sans-serif'}}>Surname: {element.surname}</p>
                    <p style={{fontFamily: 'sans-serif'}}>Nationality: {element.nationality}</p>
                    <p style={{fontFamily: 'sans-serif'}}>Job: {element.Job}</p>
                    <p style={{fontFamily: 'sans-serif'}}>Password: {props.password}</p>
                </ul>
            ))}
            <h1>To change userName:</h1>
            <form onSubmit={update}>
            New user name: <input onChange={(e)=>{e.target.value}}/>
                <button style={{marginTop:'5px', paddingRight:'5px', paddingLeft:'5px'}}>Go</button>
            </form>
        </div>
    )
}
export default MainCode
