import React, { type SetStateAction } from 'react'
import { CiSearch } from 'react-icons/ci';


type SearchItemProp = {
    searchItem:string
    setSearchItem:React.Dispatch<SetStateAction<string>>
}


const Search:React.FC<SearchItemProp> = ({ searchItem , setSearchItem}) => {
  return (
    <div className='flex justify-center items-center border-2 border-gray-200 rounded-lg'>
        <span className='text-2xl text-gray-200 font-bold'><CiSearch/></span>
        <input
            type="text"
            placeholder="Search here"
            value={searchItem}
            onChange={(e)=>{setSearchItem(e.target.value)}}
            className="text-lg text-slate-800 rounded-xl outline-none p-2"
            required
            />
    </div>
  )
}

export default Search
