
import { useState, useEffect, useContext } from 'react';
import React from 'react';
import './App.scss';
import axios from "axios";
import Card from './componets/Cards/Card';
import Drawer from './componets/drawer/Drawer'
import Header from './componets/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Orders';


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [DraweOpen, setDrawerOpen] = useState()
  const [favorit, setFavorit] = useState([])
  const [inputV, setInputV] = useState('')
  const [isLoding, setIsLoding] = useState(true)



  useEffect(()=>{
    async function fetchData (){
    const itemsResponse = await axios.get("https://645a75ab95624ceb21029a48.mockapi.io/items")
    const cartResponse = await axios.get("https://645a75ab95624ceb21029a48.mockapi.io/produc")
    const favoriResponse = await axios.get("https://645a0f2e95624ceb21f652c4.mockapi.io/favarit")
    
    setIsLoding(false)
    setItems(itemsResponse.data)
    setCartItems(cartResponse.data)
    setFavorit(favoriResponse.data)

  }
  fetchData()
},[])

const addToCard =  async (obj) => {
  try{
    const findItem = cartItems.find(item => Number(item.parentId ) == Number(obj.id))
    if(findItem){
      axios.delete(`https://645a75ab95624ceb21029a48.mockapi.io/produc/${findItem.id}`)
      setCartItems(prev => prev.filter(item => Number(item.parentId ) !== Number(obj.id)))
    }else{
      setCartItems(prev =>[...prev, obj])
      const {data} = await axios.post("https://645a75ab95624ceb21029a48.mockapi.io/produc", obj)
      setCartItems(prev => prev.map(item =>{
        if(item.parentId == data.parentId){
          return {
            ...item, id: data.id
          }
        }else{
          return item
        }
      }))
      
    }
  }catch( eror){  
    alert('eror')

  }
}
const onRemoveCard =(id)=>{
  setCartItems((prev) => prev.filter(items => Number(items.id)!== Number(id)))
  axios.delete(`https://645a75ab95624ceb21029a48.mockapi.io/produc/${id}`)
}

const onFavarit = async (obj)=>{
  try{
    if(favorit.find(objFav => Number(objFav.id) == Number(obj.id))){
      axios.delete(`https://645a0f2e95624ceb21f652c4.mockapi.io/favarit/${obj.id}`)
      setFavorit(prev => prev.filter(item => item.id !== obj.id))       
    } else{
      const  {data} = await axios.post('https://645a0f2e95624ceb21f652c4.mockapi.io/favarit', obj)
      setFavorit((post) =>[...post, data])
    }
  }catch( eror){
    alert('eror')
  }
}


const isItemAdd =(id)=>{ 
  return  cartItems.some((obj) =>  Number(obj.parentId) == Number(id))

}
  return (
    <AppContext.Provider value={{ items, cartItems, favorit, addToCard,  onFavarit, isItemAdd, setDrawerOpen, setCartItems }}>

    <div className="wraper">
    
      { DraweOpen ? <Drawer onRemoveCard={onRemoveCard} cartItems={cartItems} onCloseCart={()=>{setDrawerOpen(false)}} /> : null}
      <Header onOpenCart={()=>{setDrawerOpen(true)}} />
      <Routes>
        <Route path='/' element={ <Home isLoding={isLoding}  items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems} addToCard={addToCard}  onFavarit={onFavarit} inputV={inputV} setInputV={setInputV}  />} exate />
        <Route path='/favorit' element={ <Favorite addToCard={addToCard} onFavarit={onFavarit} favorit={favorit}  />} exate />
        <Route path='/orders' element={<Orders />} />
      </Routes>
 
    </div>
    </AppContext.Provider>
  );
}

export default App;







