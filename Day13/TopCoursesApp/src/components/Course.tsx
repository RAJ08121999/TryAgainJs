import type { CourseItem } from "../types/types"

type CourseProps = {
    course:CourseItem;
}

const Course:React.FC<CourseProps> = ({course}) => {
  return (
    <div className="h-[350px] w-[350px] border border-gray-200 mb-4 rounded-2xl overflow-hidden">
        
        <div>
            <img className=" rounded-2xl" src={course.image.url} alt={course.image.alt}/>
        </div>

        
        <div className="font-bold text-xl text-gray-200 text-center ">
          
          {course.title.length>10? course.title.substring(0,22)+"...":""}

        </div>


        <div className="text-md text-gray-200 text-center ">
          {course.description.length>180?course.description.substring(0,180)+"...":""}
        </div>
    </div>
  )
}

export default Course
