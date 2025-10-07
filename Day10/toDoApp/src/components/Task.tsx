import { useState } from 'react';
import { MdDelete } from 'react-icons/md'

type TaskProps = {
    title : string;
    index : number;
    deleteTask : (index:number)=>void;
}

const Task = ({title , index , deleteTask }:TaskProps) => {
    
    const [ completed , setCompleted ] = useState(false);

    const toggleCompleted = () => setCompleted(prev => !prev);

  return (
    <div
        className={`border-2 mb-2 p-4 rounded-md transition-colors ${
        completed ? 'bg-green-600 text-gray-200' : 'bg-amber-500 text-gray-200'
      }`}
    >
        <div className='flex items-center justify-around gap-2'>
            <input
                type='checkbox'
                checked={completed}
                onChange={toggleCompleted}
                className={`h-[20px] w-[20px] `}
            />
            <span>{title}</span>

            <button onClick={()=>deleteTask(index)}>
                <MdDelete 
                className='hover:text-red-600 hover:scale-[1.5]'
                />
            </button>
        </div>

    </div>
  )
}

export default Task
