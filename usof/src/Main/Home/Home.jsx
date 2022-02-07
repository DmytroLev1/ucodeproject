import React, { useEffect, useState } from 'react';
import style from './Home.module.css'
import QuestionItem from './QuestionItem/QuestionItem';
import Sorting from './Sorting';

let Home = (props) => {

    const [sort, setSort] = useState({type:'creation', order: 'desc'});
    const [data, setData] = useState([]);

    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }

    let url = `https://api.stackexchange.com/2.3/questions?pagesize=50&order=${sort.order}&sort=${sort.type}&site=stackoverflow&key=WdEvgb3GVigWmCTYmwLwsQ((`;
    
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
            <QuestionItem item={item} key={item.question_id}/>
        ); 
    }

    return ( 
    <div className={style.face}>
        <div className={style.top}>
            <h2>Top Questions</h2>
            <Sorting getSorting={getSorting} sort={sort.type + '-' + sort.order}/>
        </div>
        <div className={style.row}>
            {items}
        </div>
    </div>
    )
}

export default Home;