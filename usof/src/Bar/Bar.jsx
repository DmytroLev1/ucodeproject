import React, { useState } from 'react';
import style from './Bar.module.css';
import Button from './Button/Button'
import {NavLink} from "react-router-dom";
import HomeButton from './Button/HomeButton'




let Bar = (props) => {
    return ( 
    <nav className={style.bar}>
        <NavLink to="/"><HomeButton name="Home" /></NavLink>
        <div className={style.public}>PUBLIC</div>
        <NavLink to="Questions"><Button name="Questions" /></NavLink>
        <NavLink to="Users"><Button name="Users"/></NavLink>
        <NavLink to="Tags"><Button name="Tags"/></NavLink> 
    </nav>
    )
}


export default Bar;

