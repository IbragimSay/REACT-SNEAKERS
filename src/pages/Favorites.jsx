
import Card from '../componets/Cards/Card';
import CardItem from '../componets/CardItem/CardItem';
import React, {  useContext, useState } from "react";
import style from "./favorites.module.scss"
import AppContext from '../context';

import s from '../componets/Cards/card.module.scss'
const Favorite = ({ onFavarit, addToCard })=>{
  const {favorit} = useContext(AppContext)
 
 
    return(


      <div className='content'>
        <div className='block_title_input'>
          <h1>Мои закладки</h1>
        </div>
        <div className='cards'>
        <div className={s.cards}>
        {favorit
        .map(card =>(
          <CardItem onFavarit={onFavarit} favorited={true}  image={card.image} text={card.text} pric={card.pric} id={card.id} onClickFavorit={(e)=>{onFavarit(e)}} onClickPlus={e=>{addToCard(e)}} card={card} key={card.id}  />
        ))}
    </div>
        </div>
      </div>

    )
}

export default Favorite;