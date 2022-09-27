import React from 'react'
import { useState } from 'react'
import { cloudinaryService } from '../../services/cloudinary.service';
export function StayFilterButtons() {

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

}

const label = [1,2,3,4,5,6,7,8]


return (
  

  
  <div className='button-row'>

    <button className='button-nums any button-black'
      onClick={handleClick}
    >
      Any
    </button>

    {label.map((i) => {
      
      return <button className='button-nums'
      style={{
          backgroundColor:'white' ,
          color:'black',
        }}
    onClick={handleClick}
  >
    {i}
  </button>

    })}
</div>
)
}