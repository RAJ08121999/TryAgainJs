import { useState } from 'react'
import { MdDelete } from 'react-icons/md';

const Card = () => {
    
    
    const [ taskDone , setTaskDone ] = useState([]);
    const [ isChecked , setIsChecked ] = useState(false);

    

    
    
    function taskComplete(workDoneIndex):void{
        
        setIsChecked(!isChecked);
        const newBoolArr:boolean[] = Array(tasks.length).fill(false);
        newBoolArr[workDoneIndex]=isChecked;
       
        console.log("newBoolArr",newBoolArr)
        setTaskDone(newBoolArr);
        
    }

    function deleteTask(indexToDelete:number):void{
        
        setTasks(prevTasks => {
            return prevTasks.filter((task,index)=>index !== indexToDelete);
        });
    }

  return (
    <div>
        

        <div className='flex justify-around items-center mt-4 mb-4'>
            
            

            
        </div>

        <div className='flex flex-col justify-center items-center'>
            {
                tasks.map((task,index)=>(
                    <div
                    className={`h-[80px] w-full border-2 mt-2 flex justify-around items-center bg-amber-500 text-2xl text-gray-200 rounded-xl ${taskDone[index] === true ? `bg-green-600`:`bg-amber-500`} `}
                    key={index}>

                        <div>
                            <input
                            type='checkbox'
                            className={`h-[20px] w-[20px] `}
                            checked={isChecked}
                            onChange={()=>taskComplete(index)}
                            />
                        </div>

                        {task}

                        <div>
                            <button onClick={()=>deleteTask(index)}>
                                <MdDelete className='hover:text-red-600 hover:scale-[1.5]'/>
                            </button>
                        </div>

                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Card;
