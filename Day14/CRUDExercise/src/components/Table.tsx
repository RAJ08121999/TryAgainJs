import React from 'react'
import type { APIResponse, UserItem } from '../Types/types'
import { FaMinusCircle } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';


import axios from 'axios';

type tableProp = {
    users:APIResponse,
    fetchData:() => Promise<void>
    setSelectedUser : React.Dispatch<React.SetStateAction<UserItem|null>>
    searchItem:string;
}



const Table:React.FC<tableProp> = ({users , fetchData , setSelectedUser , searchItem}) => {
    console.log("users...",users)


    function editUser(e:React.MouseEvent<HTMLButtonElement>,user:UserItem){
        e.preventDefault();
        setSelectedUser(user);
    }
    
    async function deleteUser(e:React.MouseEvent<HTMLButtonElement>,id:string){
        e.preventDefault();
        try{
            await axios.delete(`https://jsonserverexercise-4.onrender.com/users/${id}`);
            fetchData();
        }
        catch(error){
            console.error("Data can't be deleted",error);
        }
    
    }

    const filteredUsers = users.filter(user=>
        user.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    console.log("filteredUsers",filteredUsers);

  return (
    <div className='w-9/12 mx-auto mt-5'>
      
        <table className='w-full border-1 border-gray-200 p-4 rounded-lg  '>
            <thead className='bg-gray-500 text-lg text-gray-200 text-center'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    (filteredUsers.length > 0 ? filteredUsers : users).map((user)=>(
                        <tr key={user.id}
                        className='border-t text-lg border-gray-200 rounded-xl'
                        >
                            <td className="py-2 text-center">{user.name}</td>
                            <td className="py-2 text-center">{user.email}</td>
                            <td className="py-2 text-center">{user.age}</td>
                            <td className="py-2 text-center">{
                                    <div className='flex gap-2 justify-center items-center'>
                                        <button
                                        className="px-1 py-1 text-xl text-green-800  rounded-full hover:scale-[1.2]"   
                                        type='button'
                                        onClick={(e)=>editUser(e,user)}
                                        >
                                            <FaPenToSquare/>
                                        </button>

                                        <button
                                        className="px-1 py-1 text-xl text-red-800  rounded-full hover:scale-[1.2]"  
                                        type='button'
                                        onClick={(e)=>deleteUser(e,user.id)}
                                        >
                                            <FaMinusCircle/>
                                        </button>
                                    </div>

                                }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default Table
