import React from 'react'
import Card from './Card';
import { useState } from "react";

import type { CourseItem } from '../types/types';


type CardsListProps = {
  courses:Record<string,CourseItem[]>;
  category:string;
};


const CardsList:React.FC<CardsListProps> = ({courses,category}) => {

  const [ likedCourses , setLikedCourses ] = useState<string[]>([]);

  function getCourses () {

    if(category==="All"){
      const allCourses:CourseItem[] = [];
      Object.values(courses).forEach((array)=>{
      array.forEach(courseData =>{
        allCourses.push(courseData);
      })
    });
    return allCourses;
    }

    else{
      return courses[category];
    }
    
  }

  return (
    <div className='flex justify-center items-center flex-wrap gap-4 mb-4'>
      {
        getCourses().map((course)=>(
          <Card key={course.id} course={course}  likedCourses={likedCourses} setLikedCourses = {setLikedCourses }/>
        ))
      }
    </div>
  )
}

export default CardsList
