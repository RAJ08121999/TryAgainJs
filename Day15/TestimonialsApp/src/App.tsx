import reviews from '../Data'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-gray-200 flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-3xl text-shadow-gray-800'>
        Our Testimonials
      </h1>
      <div className='h[1px] bg-violet-800 w-[130px]'></div>
      <Testimonials reviews={reviews}/>
    </div>
  )
}

export default App
