import React, { useContext, useState } from 'react'
import s from './cardItem.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../../context';




const CardItem = ({ onFavarit, id, pric,  image, text, card, onClickPlus, loding = false , favorited = false, added=false }) => {
  const [fovarit, setFovarit] = useState(favorited)
  const {isItemAdd} = useContext(AppContext)


  const  onClickFavorit =(e)=>{
    setFovarit(!fovarit)
    onFavarit({id, text, image, pric})
  }

  const onClickAdded =(e)=>{ 
    onClickPlus({id, text, image, pric})
  }
  return (
    <div>
      {
        loding ?  <ContentLoader 
        speed={2}
        width={150}
        height={187}
        viewBox="0 0 150 187"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
        <rect x="0" y="107" rx="3" ry="3" width="150" height="15" /> 
        <rect x="0" y="127" rx="3" ry="3" width="93" height="15" /> 
        <rect x="118" y="156" rx="8" ry="8" width="32" height="32" /> 
        <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
        
      </ContentLoader> : 
              <div  className={s.card}>
              <img onClick={onClickFavorit} className={s.favorit_but} src={fovarit ?"/photo/favorit_activ.svg"  :"/photo/favorit.svg"} alt="" />
                <img width={133} height={133}src={card.image} />
                <p>{card.text}</p>
                <div className={s.card_content}>
                  <div className={s.pric}>
                    <span>Цена:</span>
                    <h5>{card.pric}руб.</h5>
                  </div>
                   
                   <img className={s.but_addCart} onClick={onClickAdded} width={32} height={32} src={isItemAdd(id) ? "/photo/grin_but_add.svg" : "/photo/add_cart.svg"}/>
                   
                   
                 
                </div>
            </div>
      }

    </div>
  )
}

export default CardItem
