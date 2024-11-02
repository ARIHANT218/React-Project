import 'react';
import UserContext  from './UserContext';
import { useState } from 'react';

const UserContextProvider = ({child})=>{
    const [user,setUser]= useState(null);
    return (
        <UserContext.Provider value ={{user,setUser}}> {child} </UserContext.Provider>    
        

    )
    
    
    
    
}
export default UserContextProvider;