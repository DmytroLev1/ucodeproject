import React, { useState, useEffect } from 'react';
import style from './User.module.css';

let User = (props) => {
    let startedText = () => { 
        let text = '';
        if(props.user.last_activity_date === props.user.creation_date) {
            text += 'asked';
        } else {
            text += 'modified';
        }
        let now = Date.now();
        text += ' ' + Math.ceil((now  - props.user.last_activity_date * 1000) / 60000) + ' min ago';
        return text;
    } 
    let reputation = () => {
        let rep = String(props.user.owner.reputation);
        let str = rep[0] + ',' + rep.slice(1,4);
        return str;
    } 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
  
    const Loading = () => {
      return (
        <div>Loading....</div>
      );
    }
    const Ready = () => {
        return (
            <div className={style.conteiner}>
            <div className={style.asked}>
                {startedText()}
            </div>
            <div className={`${style.about} ${props.st}`}>
                <div className={style.icon}>
                    <img src={props.user.owner.profile_image}></img> 
                </div>
                <div className={style.name}>
                    <div className={style.user_name}>{props.user.owner.display_name}</div>
                    <div>
                        <span className={style.reputation}>{reputation()}</span>
                    </div>
                </div>
            </div>
        </div>
      );
    }


   
    return (
        <div className={style.user}>
            {loading && <Loading />}
            {!loading && <Ready />}
        </div>
    );
}

export default User;
