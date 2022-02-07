import React, { useState, useEffect } from 'react';
import style from './Tags.module.css';
import Sorting from './Sorting';
import TagItem from './TagItem';
import axios from 'axios';


let Tags = () => {

    const [sort, setSort] = useState({type:'popular', order: 'desc'});
    const [data, setData] = useState([]);
    
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }
    
    let url = `https://api.stackexchange.com/2.3/tags?order=${sort.order}&sort=${sort.type}&site=stackoverflow&key=WdEvgb3GVigWmCTYmwLwsQ((`;

    // const headers = new Headers({
    //     'Access-Control-Allow-Origin' : '*',
    //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // });
    // const options = {
    //     headers,
    //     credentials: "include" 
    // };

    useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response.data.items);
            if (response.data.items) {
                setData(response.data.items); 
            }
            
        })
        // .catch((error) => {
        //     console.log(error);
        //   });
        // fetch(url, {
        //     credentials: 'omit',
        //     mode: 'no-cors',
        //     headers: { 
        //         'Access-Control-Allow-Origin' : '*'},
        //     })
        // .then(result => result.json())
        // .then(
        //     (result) => {    
        //     setData(result.items); 
        // });
    }, [sort.type + '-' + sort.order]);

    let items = [];
    if(data) {
        items = data.map((item, key) => 
            <TagItem item={item} />
        ); 
    }
    
    return (
        <div>
            <h2>Tags</h2>
            <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
            <div className={style.headerline}>
                <input className={style.input} placeholder="Filter by user" />
                <div className={style.filters}>
                <Sorting getSorting={getSorting} sort={sort.type + '-' + sort.order}/> 
                </div>
            </div>
            <div className={style.items}>
                { items }
            </div>
        </div>
    );
}

export default Tags;