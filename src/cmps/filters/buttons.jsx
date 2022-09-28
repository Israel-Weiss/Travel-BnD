import React from 'react'
import { useState } from 'react'
import { cloudinaryService } from '../../services/cloudinary.service';
export function StayFilterButtons({onSetFilter}) {

    const [isActive, setIsActive] = useState(false);
    const [prevSelectedButton, setPrevButton] = useState(null)
    var selectedButton = null


const handleClick = (ev) => {

    document.querySelector('.any').classList.remove('button-black')
    if(prevSelectedButton){
      prevSelectedButton.classList.remove('button-black') 
      setPrevButton(prevSelectedButton)
    }
    selectedButton = ev.target
    ev.target.classList.add('button-black')
    setPrevButton(ev.target)
    setIsActive(current => !current)
    onSetFilter()
}

const label = [1,2,3,4,5,6,7,8]


return (
  

  
  <div className='button-row'>

    <div className='button-nums any button-black'
      onClick={handleClick}
    >
      Any
    </div>

    {label.map((i) => {
      
      return <div className='button-nums'
      style={{
          backgroundColor:'white' ,
          color:'black',
        }}
    onClick={handleClick}
  >
    {i}
  </div>

    })}
</div>
)
}