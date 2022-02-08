import React from 'react';
import style from './Header.module.css';

let Header = (props) => {
    return ( 
    <div className={style.header}>
        <div className={style.logo}>My <span>usof</span> project</div>
        <div className={style.search}><input type="text"></input></div>
        <div className={style.login}></div>
    </div>
    )
}

export default Header;