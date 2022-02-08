import React, { useState, useEffect } from 'react';
import style from './Tags.module.css';
import axios from 'axios';

let TagItem = (props) => {

   let [wiki, setWiki] = useState('');
  
   let url = `https://api.stackexchange.com/2.3/tags/${encodeURIComponent(props.item.name)}/wikis?site=stackoverflow&key=WdEvgb3GVigWmCTYmwLwsQ((`;

    // fetch(url)
    //     .then(result => result.json())
    //     .then(
    //         (result) => {
    //             // console.log(result);
    //             // console.log(result.items[0].excerpt);
    //             setWiki(result.items[0].excerpt);
    //     });
    axios.get(url)
        .then(response => {
            // console.log(response.data.items[0].excerpt)
            setWiki(response.data.items[0].excerpt);
        })
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
        <div>
            <div className={style.title}><span>{props.item.name}</span></div>
            <div className={style.wiki}> 
             {wiki}
            </div>
            <div className={style.count}>{props.item.count} questions</div>
        </div>
        );
        }
      
        return (
          <div className={style.item}>
            {loading && <Loading />}
            {!loading && <Ready />}
          </div>
        );

    // return (
    //     <div className={style.item} >
    //         <div className={style.title}><span>{props.item.name}</span></div>
    //         <div className={style.wiki}> 
    //          {wiki}
    //         </div>
    //         <div className={style.count}>{props.item.count} questions</div>
    //     </div>
    // );
}

export default TagItem;