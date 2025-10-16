import { useState } from "react"
import useCartStore from "../store/useCartStore"
import PopUp from "./PopUp";


const Navbar = () => {
  const {totalCartItem: cartItem} = useCartStore();

  const [isClicked , setIsClicked ] = useState(false);

  return (
    <div className="w-full h-[70px] p-2 bg-gray-900 flex justify-around items-center">

      <p className="text-3xl font-semibold text-gray-200">
        Your Cart
      </p>

      <button
      onClick={() => setIsClicked(prev => !prev)}
      className="bg-gray-400 px-3 py-1 rounded-md text-xl font-semibold">
        Cart({cartItem})
      </button>

      {
        isClicked ? <PopUp/>:""
      }
    </div>
  )
}

export default Navbar
