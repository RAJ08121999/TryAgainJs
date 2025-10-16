import { useEffect, useState } from "react";
import useCartStore from "../store/useCartStore"

const Card = ({index}:{index:number}) => {

  const {  setTotalCartItem: setCartItem , itemsArray: items , setItemsArray: setItems ,cartDetails: details, setCartDetails: setDetails } = useCartStore();

  useEffect(()=>{
    const total = getItemsSum(items)
      console.log(total)
      setCartItem(total);
  },[items,setCartItem]);


  function getItemsSum(itemsArr:number[]){
    return itemsArr.reduce((sum:number,currentValue:number)=>sum+currentValue,0);
  }

  function increase(){
    setCount(count+1);
  }

  function decrease(){
    if(count===0)
      return;
    setCount(count-1);
  }

  function addToCartBtnHandler(count:number,index:number){
    setItems(count);
    console.log("index clicked",index);
    setDetails({index,quantity:count});
    console.log("details dekh lo",details);
  }


  const[ count, setCount ] = useState(0);

  return (

    <div className="bg-gray-600 h-[300px] w-[300px] flex flex-col justify-center items-center gap-4 text-gray-200 mt-4 rounded-xl">
      
      <div className="font-bold text-4xl">{String.fromCharCode(65+index)}</div>

      <div className="flex justify-evenly items-center">

        <button
        
        onClick={decrease}
        className="bg-gray-700 font-extrabold text-2xl px-2 rounded-md">-</button>

        <p className=" font-extrabold text-2xl px-2 rounded-md">{count}</p>

        <button
        onClick={increase}
        className="bg-gray-700 font-extrabold text-2xl px-2 rounded-md">+</button>

      </div>

      <button
      onClick={()=>addToCartBtnHandler(count,index)}
      className="bg-gray-700 font-semibold text-2xl px-2 rounded-md"
      >Add to Cart</button>
    </div>
  )
}

export default Card
