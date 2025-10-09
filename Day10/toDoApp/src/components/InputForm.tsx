import React,{useState} from 'react'
import { FiPlusSquare } from 'react-icons/fi';

type InputFormProps = {
    tasks:string[];
    setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

const InputForm = ({ tasks , setTasks }:InputFormProps) => {

    const [ inputValue , setInputValue ] = useState('');
    

    function handleChange(e:React.ChangeEvent<HTMLInputElement>):void{
        setInputValue(e.target.value);
    }


    function addTask(e:React.MouseEvent<HTMLButtonElement>):void{
        e.preventDefault();

        if(!inputValue.trim()) return;

        setTasks( prev=> [...prev, inputValue.trim()]);

        setInputValue('');
        console.log("Tasks:",[...tasks,inputValue]);
    }

  return (
    <div className='w-[38%]'>
        <h2 className='text-[1.6rem] text-gray-700 text-center mt-17 mb-4 font-semibold'>
            To-Do List
        </h2>

        <form className='flex justify-center items-center gap-2'>

            <input
                id='input'
                className='text-lg p-1 border-2 border-gray-600 rounded-xl text-gray-700 flex-1 placeholder-gray-600 pl-4'
                type='text' 
                placeholder='Add Task'  
                value={inputValue} 
                onChange={handleChange}
                required
            />

            <button
            type='button'
            className='p-2 bg-gray-600 rounded-xl text-gray-200 text-lg '
            onClick={(e) => addTask(e)}
            >
                <FiPlusSquare/>
            </button>    

        </form>
    </div>
  )
}

export default InputForm
