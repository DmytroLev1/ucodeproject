import React from 'react';
import style from './SortButtons.module.css';


const CentalButton = (props) => {
    return (
        <div className={style.buttonCentral}>{props.title}</div>
    );
}

export default CentalButton;