import React, { useState } from 'react'
import Info from '../CardItem/Info';
import AppContext from '../../context';
import axios from 'axios';
import { useCards } from '../../hooks/useCarts';

const Drawer = ({onCloseCart, onRemoveCard,}) => {
  const {totalPrice} = useCards()
  const [isOrderComplete, setIsOrderComplate] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const {setCartItems, cartItems,} = React.useContext(AppContext)
  const [isLoding, setIsLoding] = React.useState(false)
  const onClickOrder = async()=>{
    try{
      setIsLoding(true)
      const {data} =  await axios.post('https://645a0f2e95624ceb21f652c4.mockapi.io/orders', {
        items : cartItems
      })
      setOrderId(data.id)
      setIsOrderComplate(true)
      setCartItems([])
      await cartItems.forEach(item => {
        axios.delete('https://645a75ab95624ceb21029a48.mockapi.io/produc/' + item.id)
        
      });

      
    }catch(error){
      alert('error')
    }
    setIsLoding(false)
  }
    
  return (
    <div>
    <div className='overlay'>
        <div className='drawer'>
          <h2>Корзина <img onClick={onCloseCart} className='butt_cart' src='/photo/but_cart.svg'/></h2>
          {cartItems.length > 0 ? 
          <div className='drawer'>
            
                   <div className='items'>   
                   {cartItems.map(cart=>(
                      <div key={cart.id} className='cartItem'>
                         <img className='image_cartI' width={70} height={70} src={cart.image}/>
                         <div className='cartI_info'>
                             <p className="text_cartItem">{cart.text}</p>
                             <b className='pice_cartItem'>{cart.price}</b>
                         </div>
                         <img onClick={()=> onRemoveCard(cart.id)}  className='butt_cart' src='/photo/but_cart.svg'/>
                     </div>
                   ))}          
                   </div>
                   <ul className='cartTotlaBlock'>
                    <li>
                      <span>Итого: </span>
                      <div>
                      </div>
                      <b>{totalPrice} руб. </b>
                    </li>
                    <li>
                      <span>Налог 5%:</span>
                      <div>
                      </div>
                      <b> руб. </b> 
                    </li>
                  </ul>
                  <button onClick={onClickOrder} className='but_cartTo'>Оформить заказ
                  <img src='/photo/cart_arow.svg'/></button>
            </div>
                   

                : < Info image={ isOrderComplete ? './photo/of_zak.png' : './photo/back.png'} title={ isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'} text={ isOrderComplete ? `Ваш заказ  ${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'} />
           }
        </div>
      </div>
    </div>
  )
}

export default Drawer;
