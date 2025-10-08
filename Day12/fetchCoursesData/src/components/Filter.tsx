import React from 'react'

type filterItem = {
    id:string;
    title:string;
};

type filterProps = {
    filterData:filterItem[];
    category:string;
    setCategory:React.Dispatch<React.SetStateAction<string>>;
}
const Filter:React.FC<filterProps> = ({filterData,category,setCategory}) => {

  function filterHandler(title:string){
    setCategory(title)
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center items-center'>
      {
        filterData.map((data)=>(
            <button
            onClick={()=>filterHandler(data.title)}
            className={`px-2 py-1 bg-gray-800 text-gray-200 rounded-md text-lg font-medium hover:bg-gray-700 border-2 ${category === data.title ? ("bg-opacity-60 border-white"): ("border-transparent bg-opacity-40")}
            `}
            key={data.id}>{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter
