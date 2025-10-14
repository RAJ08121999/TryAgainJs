import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

type reviewItem = {
    id:string;
    name:string;
    job:string;
    image:string;
    text:string;
}

type CardProps = {
    review:reviewItem;
    prevBtnHandler:()=>void;
    nextBtnHandler:()=>void;
    randomBtnHandler:()=>void;
}

const Card:React.FC<CardProps> = ({review,prevBtnHandler,nextBtnHandler,randomBtnHandler}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white mt-6 p-4 shadow-xl rounded-lg">

      <div className="h-[100px] w-[100px] bg-violet-500 rounded-full relative -top-15 -left-50">
        <img
        className="h-[95px] w-[95px] rounded-full object-cover"
        src={review.image}/>
      </div>

      <div className="relative -top-5">
        <p className="text-2xl font-semibold">{review.name}</p>
      </div>

      <div>
        <p className="text-md font-semibold text-violet-500 mb-3">{review.job}</p>
      </div>

      <FaQuoteLeft className="text-violet-500"/>

      <div>
        <p className="text-md">{review.text}</p>
      </div>

      <FaQuoteRight className="text-violet-500"/>

      <div>
        <button
        onClick={prevBtnHandler}
        className="text-violet-500 text-xl px-2 py-1 cursor-pointer">
            <FaAngleLeft/>
        </button>

        <button
        onClick={nextBtnHandler}
        className="text-violet-500 text-xl px-2 py-1 cursor-pointer">
            <FaAngleRight/>
        </button>
      </div>

      <div className="text-white bg-violet-500 rounded-lg text-xl px-2 py-1">
        <button
        onClick={randomBtnHandler}
        >
            Random
        </button>
      </div>

    </div>
  )
}

export default Card
