import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../context';
import { useCards } from '../../hooks/useCarts';




const Header = ({onOpenCart}) => {
    const {cartItems} = React.useContext(AppContext)
    const {totalPrice} = useCards()
  return (
    <div>
        <header className="header">
            <Link to="/">
            <div className='header_contener'>
                
                <img className='logo' src='/photo/logo_sneakers.svg'/>
                <div className='header_info'>
                    <h3>React sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            </Link>
            <ul>
                <li onClick={onOpenCart}>
                    <img  src='/photo/Group.svg'/>
                    <span>{totalPrice} руб.</span>
                </li>
                <li>
                    <Link to="/favorit">
                    <img src='/photo/favarit_st.svg'/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                   
                    <img src='/photo/Union.svg'/>
                    </Link>
                </li>
            </ul>
      </header>
    </div>
  )
}

export default Header;
