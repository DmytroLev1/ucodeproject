import React from 'react';
import style from './Sorting.module.css';
import LeftButton from './LeftButton'
import CentralButton from './CentralButton'
import RightButton from './RightButton'

const Sorting = (props) => {

    return (
        <div className={style.sorting}>
            <LeftButton title="Newest"/>
            <CentralButton title="Active"/>
            <RightButton title="Votes"/>
            <div className={style.buttonl} onClick={props.getSorting} id='creation-asc'>Newest</div>
            <div className={style.button} onClick={props.getSorting} id='activity-asc'>Active</div>
            <div className={style.buttonr} onClick={props.getSorting} id='votes-asc'>Votes</div>
        </div>
    );
}

export default Sorting;