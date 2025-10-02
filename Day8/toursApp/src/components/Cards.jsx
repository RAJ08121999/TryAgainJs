import React, { useState } from 'react'

const Cards = ({id,name,image,info,price , interestHandler}) => {


    const [readmore,setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0,100)}....`
    function readmoreHandler(){
        setReadmore(!readmore);
    }


    return (
        <div className="h-[550px] w-[500px] flex flex-col justify-center items-center mt-4 rounded-2xl shadow-2xl">
            <div className='info'>
                <img src={image}
                className='h-[350px] w-[400px] rounded-2xl shadow-2xl'
                />
                <h3
                    className='text-2xl text-center text-gray-100'
                >{name}</h3>
                
            </div>

            <div className='desc'>
                <p className='text-gray-100'>{description}</p>
                <span 
                className='text-blue-800'
                onClick={readmoreHandler}>{readmore ? `showless` : `readmore` }</span>

                <h4 className='text-xl text-green-600'>Rs.{price}</h4>
            </div>

            <button
            className='px-3 py-2 bg-red-500 text-white rounded-md mb-4'
            onClick={()=> interestHandler(id)}>
                Not Interested
            </button>

        </div>
    )
}

export default Cards
