import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';



let UserItem = (props) => {
    let setData = () => {
        localStorage.setItem('user', props.item.user_id)
    }
    return (
        <div className={style.item} key={props.item.user_id} >
            <NavLink to={"users/" + props.item.user_id} >
                <div className={style.avatar}>
                    <img className={style.img} src={props.item.profile_image} />
                </div> 
            </NavLink>
            
            <div className={style.about}>
                <div className={style.name} onClick={setData}>
                    <NavLink to={`/user/${props.item.user_id}`}>
                        {props.item.display_name}
                    </NavLink>
                </div>
                <div className={style.location}>{props.item.location}</div>
                <div className={style.reputation}>{props.item.reputation_change_month}</div>
                <div className={style.tags}>
                    <span className={style.tag}>js</span>, 
                    <span className={style.tag}>java</span>, 
                    <span className={style.tag}>c++</span> 
                </div>
            </div>
        </div>
    );
}

export default UserItem;