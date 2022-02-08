import React from 'react';
import style from './Button.module.css';



let Button = (props) => {
      
    return ( 
        <div className={style.home}>
            {props.name}
        </div>
        
    )
}


export default Button;