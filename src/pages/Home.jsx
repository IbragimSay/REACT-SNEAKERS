
import Card from '../componets/Cards/Card';

const Home = ({inputV, isLoding, onClickFavorit, setCartItems, items, setItems, cartItems, addToCard, setInputV, onFavarit})=>{
    return(

      <div className='content'>
        <div className='block_title_input'>
          <h1>Все кроссовки</h1>
          <div className='block_lup'>
            <img src='/photo/lupa.svg' />
            <input value={inputV} onChange={e=>{setInputV(e.target.value)}} placeholder='Поиск...'/>
          </div>
        </div>
        <div className='cards'>
        <Card isLoding={isLoding} onClickFavorit={onClickFavorit} onFavarit={onFavarit} addToCard={addToCard}  inputV={inputV} cartItems={cartItems} setCartItems={setCartItems} items={items} setItems={setItems} />
  
        </div>

         
      </div>
    )
}

export default Home;