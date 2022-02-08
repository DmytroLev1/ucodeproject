import React from 'react';
import style from './Sorting.module.css';
import LeftButton from '../SortButton/LeftButton';


const Sorting = (props) => {

    return (
        <div className={style.sorting}>
                    
            <LeftButton title="Reputation"/>
            <div className={props.sort === 'reputation-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="reputation-asc">Asc&#8593;</div>  
            <div className={props.sort === 'reputation-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="reputation-desc">Desc&#8595;</div>  
       
            <LeftButton title="Creation"/>
            <div className={props.sort === 'creation-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="creation-asc">Asc&#8593;</div>  
            <div className={props.sort === 'creation-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="creation-desc">Desc&#8595;</div>
        
            <LeftButton title="Name"/>
            <div className={props.sort === 'name-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="name-asc">Asc&#8593;</div>  
            <div className={props.sort === 'name-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="name-desc">Desc&#8595;</div>
        
        </div>
    );
}

export default Sorting;