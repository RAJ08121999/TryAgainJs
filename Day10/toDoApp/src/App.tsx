import { useState } from 'react';
import InputForm from './components/InputForm'
import TaskList from './components/TaskList';

const App = () => {

  const [ tasks , setTasks ] = useState<string[]>([]);

  return (
    <div className='bg-slate-950 h-screen w-screen'>
      <InputForm tasks = {tasks} setTasks = {setTasks}/>
      <TaskList tasks = {tasks} setTasks = {setTasks}/>
    </div>
  )
}

export default App
