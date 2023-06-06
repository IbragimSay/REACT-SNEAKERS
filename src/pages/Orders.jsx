
import Card from '../componets/Cards/Card';
import CardItem from '../componets/CardItem/CardItem';
import React, {  useContext, useEffect, useState } from "react";
import style from "./favorites.module.scss"
import AppContext from '../context';
import s from '../componets/Cards/card.module.scss'
import axios from 'axios';


const Orders = ({  })=>{
  const [isLodading, setIsLodading]=useState(false)
  const [orders, setOrders] = useState([])
  const {favorit, onFavarit, addToCard} = useContext(AppContext)

  useEffect(()=>{
    (async()=>{
      try{

        const {data} = await axios.get("https://645a0f2e95624ceb21f652c4.mockapi.io/orders") 
   
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
      } catch(error){
        alert('oshibka error')
      }

    })()
  }, [ ])
 
 
    return(
  


      <div className='content'>
        <div className='block_title_input'>
          <h1>Мои покупки</h1>
        </div>
        <div className='cards'>
        <div className={s.cards}>
        {orders 
        .map((card, index) =>(
          <CardItem onFavarit={onFavarit}  
          image={card.image} 
          text={card.text} pric={card.pric} 
          id={card.id} onClickFavorit={(e)=>{onFavarit(e)}} 
          onClickPlus={e=>{addToCard(e)}} card={card} 
          key={index}  />
        ))}
    </div>
        </div>
      </div>
    )
}

export default Orders;