import React, { useEffect, useState } from 'react';
import style from './Questions.module.css';

let QuestionBody = (props) => {

    let url = `https://api.stackexchange.com/2.3/questions/${props.id}?order=desc&sort=activity&tagged=wordpress&site=stackoverflow&filter=withbody&key=WdEvgb3GVigWmCTYmwLwsQ((`;
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => { 
            setData(result.items[0]);
        });
    }, []);

    return (
        <div className={style.body_q} dangerouslySetInnerHTML={{__html: data.body}} >                          
        </div>
    );
}

export default QuestionBody;