import {useContext} from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext); 
    if(!user) return <h2>Please Login </h2>

     return (
    <div> Welcome USER{user.username}</div>
    )
}

export default Profile