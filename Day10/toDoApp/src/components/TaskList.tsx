import Task from "./Task";

type TaskListProps = {
    tasks:string[];
    setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}
const TaskList = ({ tasks , setTasks }:TaskListProps) => {

    const deleteTask = (index:number) => {
        setTasks (prev => prev.filter((task,indexToDelete) => indexToDelete!== index))
    }

  return (
    <div className='mt-6 text-gray-200 text-3xl'>
      {
        tasks.map((task,index) => (
            
            <Task key={index} index = {index} title = {task} deleteTask={deleteTask}/>
            
        ))
      }
    </div>
  )
}

export default TaskList
