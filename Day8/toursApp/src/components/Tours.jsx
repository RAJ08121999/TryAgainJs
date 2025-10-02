import React from 'react'
import Cards from './Cards'

const Tours = ({tours , interestHandler }) => {
    return (
        <div className='w-full h-full flex justify-around items-center flex-wrap'>
            <h1 className='w-full p-2 text-amber-600 text-4xl text-center border-5 border-dashed border-slate-500 rounded-xl'>Plan Tours With Us</h1>
            {
                tours.map((tour)=>(
                    <Cards {...tour} key={tour.id} interestHandler = {interestHandler}/>
                ))
            }
        </div>
    )
}

export default Tours
