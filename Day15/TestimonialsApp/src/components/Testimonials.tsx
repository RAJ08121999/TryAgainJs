import { useState } from "react";
import Card from "./Card";

type reviewItem = {
    id:string;
    name:string;
    job:string;
    image:string;
    text:string;
}
    

type TestimonialsProp = {
    reviews:reviewItem[];
}

const Testimonials:React.FC<TestimonialsProp> = ({reviews}) => {

    const [index , setIndex ] = useState(0)
    function prevBtnHandler(){
        if(index===0) return
        setIndex(index-1);
        console.log("index decrease hua ",index);
    }

    function nextBtnHandler(){
        if(index===20)return
        setIndex(index+1);
        console.log("index increase hua ",index);
    }

    function randomBtnHandler(){
        setIndex(Math.ceil(Math.random()*20));
        console.log("random index dekho",index)
    }

  return (
    <div className="w-[600px]">
      <Card review={reviews[index]} prevBtnHandler = {prevBtnHandler} nextBtnHandler = {nextBtnHandler} randomBtnHandler = {randomBtnHandler} />
    </div>
  )
}

export default Testimonials
