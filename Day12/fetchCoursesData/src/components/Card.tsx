import { FcLike,FcLikePlaceholder } from "react-icons/fc";

import type { CourseItem } from "../types/types";
import { toast } from "react-toastify";

type CardProps = {
  course:CourseItem;
  likedCourses: string[];
  setLikedCourses:React.Dispatch<React.SetStateAction<string[]>>
}


const Card:React.FC<CardProps> = ({course , likedCourses , setLikedCourses }) => {

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
      toast.warning("Liked removed Successfully ")
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-gray-800 rounded-md overflow-hidden ">
  
      <div className="w-full relative">
        <img src={course.image.url} alt={course.image.alt}/>

        <div className="w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center absolute right-2 bottom-[-10px]">
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? (<FcLike fontSize="1.80rem"/>) : (<FcLikePlaceholder fontSize="1.80rem"/>)
            }
          </button>
        </div>

      </div>

      
      <div className="p-4">
        <p className="text-white text-lg font-bold leading-6">
          {
            course.title.length>30 ? (course.title.substring(0,20))+"..." :(course.title)
          }
        </p>

        <p className="text-white text-sm mt-2">
        {
          course.description.length>100 ? (course.description.substring(0,100))+"..." :(course.description)
        }
        </p>
      </div>
    </div>
  )
}

export default Card
