import type { CourseItem } from "../types/types";

type filterDataProps = {
    courses : Record<string,CourseItem[]|null>;
    category : string;
    setCategory:React.Dispatch<React.SetStateAction<string>>
}

const Filter:React.FC<filterDataProps> = ({ courses , category , setCategory}) => {

  function changeCategory(title:string){
    console.log("ye hai title",title);
    setCategory(title);
  }

  const categoryKeys = ["All", ...Object.keys(courses)];
  console.log(categoryKeys);
  

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {
        categoryKeys.map((data,index)=>(
            <button
            onClick={()=>changeCategory(data)}
            className={`px-2 py-1 bg-slate-900 text-2xl text-gray-200 rounded-md ${
              category === data ? 'border-2 border-gray-200' : ''
            }`}
            key={index}>{data}</button>
        ))
      }
    </div>
  )
}

export default Filter
