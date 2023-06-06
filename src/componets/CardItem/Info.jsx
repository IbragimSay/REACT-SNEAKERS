import React from 'react'
import AppContext from '../../context';

const Info = ({image, title, text}) => {

    const {setDrawerOpen}= React.useContext(AppContext)
  return (
    <div className='big_block_info'>
        <img className='back_img' src={image} alt="" />
        <p className='title_info'>{title}</p>
        <p className='text_info'>{text}</p>
        <button onClick={()=>{setDrawerOpen(false)}} className='Info_btn'>Вернуться назад</button>
    </div>
    

  )
}

export default Info;
