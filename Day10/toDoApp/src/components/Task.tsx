import { useState } from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import { FaPenToSquare, FaRegCircleCheck } from 'react-icons/fa6';


type TaskProps = {
    title : string;
    index : number;
    deleteTask : (index:number)=>void;
    setTasks : React.Dispatch<React.SetStateAction<string[]>>;
}

const Task = ({title , index , deleteTask , setTasks }:TaskProps) => {
    
    const [ completed , setCompleted ] = useState(false);

    const [ isEditBtnClicked , setIsEditBtnClicked ] = useState(false);

    const [ newValue , setNewValue ] = useState(title);


    function editTask(e:React.ChangeEvent<HTMLInputElement>){
       setNewValue(e.target.value);
    }

    function editHandler(e:React.MouseEvent<HTMLButtonElement>){
      e.preventDefault();
      if(!newValue.trim()) return;
      setTasks(prev => prev.map((task , i )=> i === index ? newValue:task));
      setIsEditBtnClicked(false)
    }

    const toggleCompleted = () => setCompleted(prev => !prev);

  return (
    <div
        className={`shadow-lg mb-6 p-4 rounded-md text-gray-600 text-xl ${completed ? ` line-through` : ``}`}
    >   
      {
      
        isEditBtnClicked
         ? (

          <div className='flex items-center justify-between'>
            <div className='flex justify-center items-center gap-2'>
              <input
                  type='checkbox'
                  disabled
                  checked={completed}
                  onChange={toggleCompleted}
                  className={`h-4 w-4 rounded-md accent-gray-200 `}
              />
              <span>
                <input
                  id='edit'
                  className='w-full text-lg p-1 rounded-xl text-gray-700 flex-1 placeholder-gray-600 pl-4 border-none focus:outline-none'
                  type='text' 
                  placeholder='Edit Task'  
                  value={newValue} 
                  onChange={(e)=>editTask(e)}
                  required
                />
              </span>
            </div>

            <div className='flex justify-center items-center gap-2'>
              
              <button onClick={(e)=> editHandler(e)}>
                <FaRegCircleCheck
                className='bg-white text-green-500'/>
              </button>

              <button onClick={()=>deleteTask(index)}>
                  <FaMinusCircle 
                  className='bg-white rounded-full text-red-400 '
                  />
              </button>

            </div>
            
          </div>

         )
         : (

          <div className='flex items-center justify-between'>
            <div className='flex justify-center items-center gap-3'>
              <input
                  type='checkbox'
                  checked={completed}
                  onChange={toggleCompleted}
                  className={`h-4 w-4 rounded-md accent-gray-200 `}
              />
              <span>
                {title.length>30? title.substring(0,26)+"...":`${title}`}
              </span>
            </div>

            <div className='flex justify-center items-center gap-3'>
              
              <button
              onClick={()=> setIsEditBtnClicked(true)}
              >
                <FaPenToSquare
                className='text-gray-400'/>
              </button>

              <button onClick={()=>deleteTask(index)}>
                  <FaMinusCircle 
                  className='bg-white rounded-full text-red-400 '
                  />
              </button>

            </div>
            
          </div>

         )
      
      }

    </div>
  )
}

export default Task
