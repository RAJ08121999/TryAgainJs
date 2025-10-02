import React, { useEffect, useState } from 'react'
import State from './State';

const Country = () => {

    const data = [
        ["india","delhi","chennai","mumbai","west bengal"],
        ["bangladesh","dhaka","rajshahi","sylet"],
        ["usa","newyork","california","alaska"]
    ];


    const [selectedCountry,setSelectedCountry]=useState(data[0]);

    function handleChange(e){
        setSelectedCountry(data.find((subArr)=>(
            subArr[0]===e.target.value
        )));
    }

    useEffect(()=>{
        console.log("selected country2nd",selectedCountry);
    },[selectedCountry]);

    return (
        <div>
            <select onChange={handleChange}>
                {
                    data.map((countryArr,index)=>(
                        <option key={index}>
                            {countryArr[0]}
                        </option>
                    ))
                }

            </select>

            <State statesList = {selectedCountry} />
        </div>
    )
}

export default Country
