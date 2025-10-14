import { useEffect, useState } from 'react'
import type { APIResponse, UserItem } from './Types/types';
import InputForm from './components/InputForm';
import Table from './components/Table';
import axios from 'axios';
import Spinner from './components/Spinner';
import Search from './components/Search';

const App = () => {
  const [ users , setUsers ] = useState<APIResponse|null>(null);
  const [ loading , setLoading ] = useState(false);
  const [ selectedUser , setSelectedUSer ] = useState<UserItem|null>(null)
  const [ searchItem , setSearchItem ] = useState("");
  
  async function fetchData (){
    try{
      setLoading(true);
      const response = await axios.get("https://jsonserverexercise-4.onrender.com/users");
      console.log(response.data);
      setUsers(response.data);
      console.log("users from app",users)
    }
    catch(error){
      console.error("error aa gya jee",error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className='h-screen w-full bg-slate-400 flex flex-col justify-center items-center'>

      <h1 className='w-full text-2xl font-bold text-gray-200 bg-slate-800 p-2 text-center absolute top-0'>
        User Registration
      </h1>
      
      <InputForm setUsers = {setUsers} selectedUser = {selectedUser}/>

      <Search searchItem = {searchItem} setSearchItem = {setSearchItem} />
      
      {
        loading 
        ? <Spinner/>
        : users && <Table users={users} fetchData = {fetchData} setSelectedUser = {setSelectedUSer} searchItem = {searchItem} />
      }
      
    </div>
  )
}

export default App
