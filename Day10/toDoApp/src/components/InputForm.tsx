import React,{useState} from 'react'

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
    <div>
        <h2 className='text-4xl text-gray-200 text-center mb-8'>
            Today's Tasks to Complete
        </h2>

        <form className='flex justify-around items-center'>

            <input
                className='text-xl p-4 border-2 border-amber-800 rounded-xl focus:bg-slate-800 text-gray-200'
                type='text' 
                placeholder='Enter Tasks to Add...'  
                value={inputValue} 
                onChange={handleChange}
                required
            />

            <button
            type='button'
            className='px-3 py-2 bg-blue-500 rounded-md text-gray-200 text-xl'
            onClick={(e) => addTask(e)}
            >
                Add Task
            </button>    

        </form>
    </div>
  )
}

export default InputForm
