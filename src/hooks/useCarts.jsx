import React, { useContext } from "react";
import AppContext from "../context";


export const   useCards =()=>{
    const {cartItems, setCartItems} = useContext(AppContext)
    const totalPrice =  cartItems.reduce((sum , obj) => obj.pric + sum , 0) 

    return {totalPrice, setCartItems, cartItems}
}