import React from 'react'
import { useState } from 'react'

export function StayFilterButtons() {

    const [isActive, setIsActive] = useState(false);


const handleClick = (ev) => {


    if(document.querySelector('.button-nums-any').style.color !== 'black'){
        document.querySelector('.button-nums-any').style.color = 'black'
        document.querySelector('.button-nums-any').style.backgroundColor = 'white'
    }
    console.log(ev.target.style.color)
    ev.target.style.backgroundColor === 'white' ? ev.target.style.backgroundColor = 'black' : ev.target.style.backgroundColor = 'white'
    ev.target.style.color === 'black' ? ev.target.style.color = 'white' : ev.target.style.color = 'black'
    setIsActive(current => !current)

}

return (
  <div className='button-row'>
    <button className='button-nums-any'
    style={{
        backgroundColor:'black' ,
        color:'white',
      }}
      onClick={handleClick}
    >
      Any
    </button>
    <button className='button-nums'
        style={{
            backgroundColor:'white' ,
            color:'black',
          }}
      onClick={handleClick}
    >
      1
    </button>
    <button className='button-nums'
            style={{
                backgroundColor:'white' ,
                color:'black',
              }}
      onClick={handleClick}
    >
      2
    </button>
    <button className='button-nums'
            style={{
                backgroundColor:'white' ,
                color:'black',
              }}
      onClick={handleClick}
    >
      3
    </button>
    <button className='button-nums'
            style={{
                backgroundColor:'white' ,
                color:'black',
              }}
      onClick={handleClick}
    >
      4
    </button>
    <button className='button-nums'
            style={{
                backgroundColor:'white' ,
                color:'black',
              }}
      onClick={handleClick}
    >
      5
    </button>
    <button className='button-nums'
            style={{
                backgroundColor:'white' ,
                color:'black',
              }}
      onClick={handleClick}
    >
      6
    </button>
    <button className='button-nums'
            style={{
                backgroundColor:'white' ,
                color:'black',
              }}
      onClick={handleClick}
    >
      7
    </button>
    <button className='button-nums'
            style={{
                backgroundColor:'white' ,
                color:'black',
              }}
      onClick={handleClick}
    >
      8+
    </button>

  </div>
)
}