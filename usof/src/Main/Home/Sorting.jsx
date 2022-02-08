import React from 'react';
import style from './Sorting.module.css';
import LeftButton from '../SortButton/LeftButton';

const Sorting = (props) => {

    return (
        <div className={style.sorting}>
            <LeftButton title="Creation"/>
            <div className={props.sort === 'creation-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="creation-asc">Asc&#8593;</div>  
            <div className={props.sort === 'creation-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="creation-desc">Desc&#8595;</div>  
           
            <LeftButton title="Activity"/>
            <div className={props.sort === 'activity-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="activity-asc">Asc&#8593;</div>  
            <div className={props.sort === 'activity-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="activity-desc">Desc&#8595;</div>
            
            <LeftButton title="Votes"/>
            <div className={props.sort === 'votes-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="votes-asc">Asc&#8593;</div>  
            <div className={props.sort === 'votes-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="votes-desc">Desc&#8595;</div>
            
        </div>
    );
}

export default Sorting;

