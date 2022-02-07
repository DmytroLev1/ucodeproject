import React from 'react';
import style from './Footer.module.css';

let Footer = (props) => {
    return ( 
    <div className={style.row}>
        <div className={style.menu}>StackOwerflow API Exchange</div>
                
        <div className={style.copy}>© 2022 - Dmitro Zahorovskiy</div>
    </div>
    )
}

export default Footer;