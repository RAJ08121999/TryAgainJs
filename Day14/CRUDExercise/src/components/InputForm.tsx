import { useEffect, useState } from "react"
import type { UserItem } from "../Types/types"
import { FaRegCircleCheck } from "react-icons/fa6"

type inputFormProp = {
    setUsers : React.Dispatch<React.SetStateAction<UserItem[]|null>>
    selectedUser : UserItem|null;
}

const InputForm:React.FC<inputFormProp> = ({setUsers , selectedUser }) => {
    const [ name, setName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ age, setAge ] = useState<number | "">("");

    function addUser(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        if(selectedUser){
          setUsers(prev => prev?.map(user=>
            user.id === selectedUser.id
            ?{...user, name, email , age:age || 0 }
            : user
          )||null);
        }

        else{
          const newUser:UserItem ={
            id:Date.now().toString(),
            name,
            email,
            age:age||0,
          };
          setUsers( prev => prev ? [...prev,newUser]:[newUser]);
        }
        
        setName("");
        setEmail("");
        setAge("");
    }

    useEffect(()=>{
      if(selectedUser){
        setName(selectedUser.name);
        setEmail(selectedUser.email);
        setAge(selectedUser.age);
      }
    },[selectedUser])

  return (
    <div className=" w-full max-w-3xl mx-auto mt-6 p-4 rounded-xl border-gray-200">
      <form className="grid grid-cols-3 md:grid-cols-4 gap-4 items-end ">
        <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        className="text-lg text-slate-800 border-2 border-gray-100 rounded-xl p-2 outline-none "
        required
        />

        <input
        type="text"
        placeholder="Enter your Email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        className="text-lg border-2 border-gray-100 rounded-xl p-2 text-slate-800 outline-none"
        required
        />

        <input
        type="number"
        placeholder="Enter your Age"
        value={age}
        onChange={(e)=>{setAge(Number(e.target.value))}}
        className="text-lg border-2 border-gray-100 rounded-xl p-2 text-slate-800 outline-none"
        required
        />

          <button
            onClick={addUser}
            type="button"
            className="h-[45px] w-[45px] flex items-center justify-center bg-slate-200 text-green-600 font-semibold  rounded-lg transition text-3xl"
          >
            <FaRegCircleCheck />
            
          </button>
      </form>
    </div>
  )
}

export default InputForm
