import  { useState } from 'react'
import States from './States';

const data = [
    {
        country:"India",
        states:["West Bengal","Mumbai","Chennai","Bengalore"],
    },
    {
        country:"Bengladesh",
        states:["Raj Shahi","Chittagong","Sylet","Dhaka"],
    },
    {
        country:"USA",
        states:["New York","Alaska","California","Washington"]
    },
    {
        country:"Greece",
        states:["Attica","Central Greece ","Crete" ,"Epirus"]
    }
]


const Country = () => {

    const [index , setIndex ] = useState(data[0]);

    function changeHandler(e:React.ChangeEvent<HTMLSelectElement>){
        const found = (data.find((item)=> item.country === e.target.value));

        console.log(found)

        if(found)
            setIndex(found);
    }

  return (
    <div className='country'>
      <select onChange={(e)=>changeHandler(e)}>
        {
            data.map((ctry,index)=>(
                <option key={index}>{ctry.country}</option>
            ))
        }
      </select>

      <States index={index} />
    </div>
  )
}

export default Country
