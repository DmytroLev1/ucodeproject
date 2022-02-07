import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';
import style from './Users.module.css';
import Sorting from './Sorting';

let Users = () => {

    const [sort, setSort] = useState({type:'reputation', order: 'asc'});
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(false);
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }

   let url = `https://api.stackexchange.com/2.3/users?order=${sort.order}&sort=${sort.type}&site=stackoverflow&key=WdEvgb3GVigWmCTYmwLwsQ((`;


    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => {
            setData(result.items); 
        });
    }, [sort.type + '-' + sort.order]);

  

    let items = [];
    if(data) {
        items = data.map(item => 
            <UserItem item={item}/>
        ); 
    }
   
    return (
        <div>
            <h2>Users</h2>
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

export default Users;
