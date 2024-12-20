import 'react'
import {useState , useContext} from 'react';
import UserContext from '../context/UserContext';
function Login(){

    const [username , setUsername]= useState("");
    const [password , setPassword ] = useState("");
    const {setUser} =  useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventdefault();
        setUser({username,password})
    }
    return (
        <div>

            <h2>Login</h2>
            <input type='text' value={username} 
            onChange={(e)=>{e.target.value}} placeholder='username'/>
            <input type='password' value={password} 
            onChange={(e)=>{e.target.value}} placeholder='password'/>
            <button onClick={handleSubmit}>submit</button>

        </div>
    )
}
export default Login;