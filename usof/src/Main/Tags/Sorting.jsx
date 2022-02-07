import React from 'react';
import style from './Sorting.module.css';
import LeftButton from '../SortButton/LeftButton';



const Sorting = (props) => {

    return (
        <div className={style.sorting}>
                    
            <LeftButton title="Popularity"/>
            <div className={props.sort == 'popular-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="popular-asc">Asc&#8593;</div>  
            <div className={props.sort == 'popular-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="popular-desc">Desc&#8595;</div>  
           
            <LeftButton title="Activity"/>
            <div className={props.sort == 'activity-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="activity-asc">Asc&#8593;</div>  
            <div className={props.sort == 'activity-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="activity-desc">Desc&#8595;</div>
            
            <LeftButton title="Name"/>
            <div className={props.sort == 'name-asc' ? `${style.active} ${style.buttonCentral}` : style.buttonCentral} onClick={props.getSorting} id="name-asc">Asc&#8593;</div>  
            <div className={props.sort == 'name-desc' ? `${style.active} ${style.buttonRight}` : style.buttonRight} onClick={props.getSorting} id="name-desc">Desc&#8595;</div>
            
        </div>
    );
}

export default Sorting;