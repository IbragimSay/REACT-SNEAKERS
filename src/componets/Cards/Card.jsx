import React, {  useContext, useState } from "react";
import CardItem from "../CardItem/CardItem";
import s from './card.module.scss'
import AppContext from '../../context';



const Card = ({items, isLoding, onFavarit, addToCard, inputV, cartItems, setCartItems}) => {


  
  const masFayk = [
    {pric: 0, image: 0, text: 0, id: 0},
    {pric: 0, image: 0, text: 0, id: 0},
    {pric: 0, image: 0, text: 0, id: 0},
    {pric: 0, image: 0, text: 0, id: 0},
    {pric: 0, image: 0, text: 0, id: 0},
    {pric: 0, image: 0, text: 0, id: 0},
    {pric: 0, image: 0, text: 0, id: 0},
    {pric: 0, image: 0, text: 0, id: 0}]
  const renderItems = ()=>{
    return (isLoding ? masFayk : items.filter(item => item.text.toLowerCase().includes(inputV.toLowerCase()))) 
      .map((card , index) =>(
         <CardItem 
          onFavarit={onFavarit}
          image={card.image} 
          text={card.text} 
          pric={card.pric} 
          id={card.id} 
          onClickFavorit={(e)=>{onFavarit(e)}}  
          onClickPlus={e=>{addToCard(e)}}
          card={card} 
          key={index} 

          loding ={isLoding}
          />
          
      ))
  }

    
  return (
    <div className={s.cards}>
        {renderItems()}
    </div>
  )
}

export default Card;
