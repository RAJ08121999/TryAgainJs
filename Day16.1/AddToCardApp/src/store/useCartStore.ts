import { create } from "zustand";

type Store = {
    
    totalCartItem:number;
    setTotalCartItem:(arg:number)=>void


    itemsArray:number[];
    setItemsArray:(arg:number)=>void;
    

    cartDetails:{index:number;quantity:number}[];
    setCartDetails:(newObj:{index:number;quantity:number})=>void;

}

const useCartStore = create<Store>((set)=>({
    
    totalCartItem:0,
    setTotalCartItem:(newValue:number)=>set({
        totalCartItem:newValue,
    }),

    itemsArray:[],
    setItemsArray:(newVal:number)=>
        set(state => ({
        itemsArray: [...state.itemsArray, newVal]
    })),

    cartDetails:[],
    setCartDetails:(newObj:{index:number;quantity:number})=>
    set(state =>({
        cartDetails:[...state.cartDetails,newObj]
    })),

}));

export default useCartStore;