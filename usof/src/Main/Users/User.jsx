import React, { useState, useEffect } from 'react';
import style from './User.module.css';

let User = (props) => {
    
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
    
    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);

    let id = localStorage.getItem('user');
    let url = `https://api.stackexchange.com/2.3/users/${id}?order=desc&sort=reputation&tagged=wordpress&site=stackoverflow&filter=withbody&key=WdEvgb3GVigWmCTYmwLwsQ((`;
    let url2 = `https://api.stackexchange.com/2.3/users/${id}/tags?order=desc&sort=popular&tagged=wordpress&site=stackoverflow&filter=withbody&key=WdEvgb3GVigWmCTYmwLwsQ((`;
    
    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => { 
            setData(result.items[0]);
        });
    }, []);

    useEffect(() => {
        fetch(url2)
        .then(result => result.json())
        .then(
            (result) => { 
            setTags(result);
        });
    }, []);
    console.log(tags);
    const Loading = () => {
      return (
        <div>Loading....</div>
      );
    }
    const Ready = () => {
        
        return (
            <div className={style.conteiner}>
                <div className={style.top}>
                    <div className={style.avatar}>
                        <img src={data.profile_image} alt="" />
                    </div>
                    <div className={style.title}>
                        <div className={style.name}>{data.display_name}</div>
                        <div className={style.location}>{data.location}</div>
                        <div className={style.reputation}>{data.reputation}</div>
                    </div>
                </div>
                <div className={style.item}>Badges</div>
                <div className={style.badges}>
                    <div className={style.badge}>
                        <div className={style.gold}>Gold</div>
                        <div className={style.desc}>
                            <div className={style.counts}>{data.badge_counts.gold}</div>
                            <div className={style.us}>gold badges</div>
                        </div>
                    </div>
                    <div className={style.badge}>
                        <div className={style.silver}>Siver</div>
                        <div className={style.desc}>
                            <div className={style.counts}>{data.badge_counts.silver}</div>
                            <div className={style.us}>silver badges</div>
                        </div>
                    </div>
                    <div className={style.badge}>
                        <div className={style.bronze}>Bronze</div>
                        <div className={style.desc}>
                            <div className={style.counts}>{data.badge_counts.bronze}</div>
                            <div className={style.us}>bronze badges</div>
                        </div>
                    </div>
                </div>
                <div className={style.item}>Tags</div>
                <div className={style.tags}></div>
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
