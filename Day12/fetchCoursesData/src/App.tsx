import Navbar from './components/Navbar'
import Filter from './components/Filter'
import CardsList from './components/CardsList'
import { apiUrl , filterData } from './Data'
import { useEffect , useState } from 'react'
import Spinner from './components/Spinner'
import { toast } from 'react-toastify'
import type { ApiResponse } from './types/types'

const App = () => {
  const [courses , setCourses ] = useState<ApiResponse | null>(null);
  const [loading , setLoading ] = useState(true);
  const [category , setCategory ] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output);
    }catch(error){
      console.error(error);
      toast.error("Data fetching failed ");
    }
    setLoading(false);
  };

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-700 '>

      <div>
        <Navbar/>
      </div>

      <div>

        <div>
          <Filter filterData = {filterData} category = {category} setCategory = {setCategory}/>
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] '>
          {
            loading||!courses ? (<Spinner/>) : (<CardsList courses={courses.data} category = {category} />)
          }
        </div>

      </div>
      

    </div>
  )
}

export default App
