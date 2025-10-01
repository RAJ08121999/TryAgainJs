import React, { useEffect, useState } from 'react'
import axios from 'axios';

const FetchUsers = () => {
    const [ users , setUser ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                // response will be an array of objects
                setUser(response.data);
            }catch(err){
                console.error("error in fetching user data",err);
            }
            setLoading(false);
        };

        fetchUsers();
    },[]);

    if(loading){
        return <p>Loading...</p>
    }

    return (
        
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user=>{
                    return(
                        <li key={user.id}>
                        {user.name}
                        <br/>
                        {user.email}
                        <br/><br/>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FetchUsers
