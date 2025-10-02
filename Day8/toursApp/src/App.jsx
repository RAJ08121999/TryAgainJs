import React, { useState } from 'react'
import Data from './Data'
import Tours from './components/Tours'

const App = () => {

  const [tours , setTours ] = useState(Data);
  
  function interestHandler(id){
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
  }

  function refreshHandler(){
    setTours(Data);
  }

  if(tours.length === 0){
    return(
      <div className='bg-slate-950 h-screen w-full flex flex-col justify-center items-center'>
        <h2 className='text-amber-700 text-3xl '>No Tours Left </h2>
        <button
        className='px-3 py-2 bg-green-500 rounded-md text-xl mt-4 text-amber-600'
        onClick={refreshHandler}>Refresh🔄</button>
      </div>
    )
  }

  return (
    <div className='h-full w-full bg-slate-950'>
      <Tours tours = {tours} interestHandler = {interestHandler} />
    </div>
  )
}

export default App
