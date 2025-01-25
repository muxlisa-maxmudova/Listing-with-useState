import {useState} from "react";

const LoginControl = () => {
    const [justify, setJustify] = useState(false);
    const [login, setLogin] = useState( 'log in');
    function Login(){
       if(login==='log in' ){
           setLogin('log out')
           setJustify(false)
       } else if(login==='log out'){
           setLogin('log in')
           setJustify(true)
       }
       console.log(justify)
   }
    return (
        <div>
            <button onClick={Login}>{login}</button>
        </div>
    )
}
export default LoginControl
