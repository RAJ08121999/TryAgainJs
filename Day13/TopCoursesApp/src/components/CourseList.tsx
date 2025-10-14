import type { CourseItem } from "../types/types"
import Course from "./Course";


type CourseListProps = {
    courses:Record<string,CourseItem[]>;
    category:string;
    setCategory : React.Dispatch<React.SetStateAction<string>>;
}

const CourseList:React.FC<CourseListProps> = ({courses , category}) => {  
  console.log("ye dekho courses",courses);
    function getCourses(){
      if(category == "All"){
        const newArray:CourseItem[] = [];
        Object.values(courses).forEach((courseArray)=>{
            courseArray.forEach((course:CourseItem)=>{
                newArray.push(course)
            });
        });
        return newArray;
      }
      else{
        return courses[category];
      }
    }


  return (
    <div className=" w-10/12  flex flex-wrap justify-between items-center mt-4">
      {
        getCourses().map((course)=>(
            <Course key={course.id} course={course}/>
        ))
      }
    </div>
  )
}

export default CourseList;
