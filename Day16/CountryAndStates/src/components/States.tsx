import React from 'react'

type stateProp = {
    index:{
        country:string,
        states:string[]
    }
}

const States:React.FC<stateProp> = ({index}) => {
  return (
    <div>
      <select>
        {
            index.states.map((rajya,index)=>(
                <option key={index}>{rajya}</option>
            ))
        }
      </select>
    </div>
  )
}

export default States
