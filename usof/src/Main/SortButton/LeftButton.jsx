import React from 'react';
import style from './SortButtons.module.css';


const LeftButton = (props) => {
    return (
        <div className={style.buttonLeft}>{props.title}</div>
    );
}

export default LeftButton;