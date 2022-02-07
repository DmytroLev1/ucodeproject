import React from 'react';
import style from './SortButtons.module.css';


const RightButton = (props) => {
    return (
        <div className={style.buttonRight}>{props.title}</div>
    );
}

export default RightButton;