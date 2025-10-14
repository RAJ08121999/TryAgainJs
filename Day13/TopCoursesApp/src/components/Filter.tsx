type filterItem = {
    id:string,
    title:string
}

type filterDataProps = {
    filterData:filterItem[];
    category : string;
    setCategory:React.Dispatch<React.SetStateAction<string>>
}

const Filter:React.FC<filterDataProps> = ({filterData , category , setCategory }) => {

  function changeCategory(title:string){
    console.log("ye hai title",title);
    setCategory(title);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {
        filterData.map((data,index)=>(
            <button
            onClick={()=>changeCategory(data.title)}
            className={`px-2 py-1 bg-slate-900 text-2xl text-gray-200 rounded-md ${category===data.title? `border-2 border-gray-200`:``}`}
            key={index}>{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter
