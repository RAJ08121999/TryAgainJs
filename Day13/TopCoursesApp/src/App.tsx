import CourseList from "./components/CourseList"
import Filter from "./components/Filter"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import type { APIResponse } from "./types/types"
import axios from "axios"
import Spinner from "./components/Spinner"

const apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses"



const App = () => {

  const [ courses , setCourses ] = useState<APIResponse|null>(null);
  const [ loading , setLoading ] = useState(false);
  const [ category , setCategory ] = useState<string>("All");

  const fetchData = async () => {
    setLoading(true);
    try{
      const response = await axios.get(apiUrl);
      console.log("api response",response.data);
      setCourses(response.data);
      
    }
    catch(error){
      console.error("Data Fetching Failed",error);
    }
    setLoading(false);
  }
  

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className=" w-full h-full bg-slate-700 flex flex-col justify-center items-center">

      <Navbar/>

      <Filter courses = {courses?.data || {}} setCategory={setCategory} category = {category}/>
      
      {
        loading ||!courses ? <Spinner/> : <CourseList courses={courses.data} category = {category}  />
      }
      
    </div>
  )
}

export default App
