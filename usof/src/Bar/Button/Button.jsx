import React from 'react';
import style from './Button.module.css';
import { useState } from 'react';



let Button = (props) => {
    const [act, setAct] = useState(style.item);
  
    return ( 
        <div onClick={()=> setAct(style.item)} className={act}>
            {props.name}
        </div>
        
    )
}


export default Button;