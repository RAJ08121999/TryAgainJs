import { useState } from 'react';
import InputForm from './components/InputForm'
import TaskList from './components/TaskList';
import Footer from './components/Footer';

const App = () => {

  const [ tasks , setTasks ] = useState<string[]>([]);

  return (
    <div className='flex flex-col justify-around items-center'>
      <InputForm tasks = {tasks} setTasks = {setTasks}/>
      <TaskList tasks = {tasks} setTasks = {setTasks}/>
      <Footer/>
    </div>
  )
}

export default App
