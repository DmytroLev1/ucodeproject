import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Home.module.css'
import Tags from '../Home/QuestionItem/Tags';
import User from '../User/User';



// let Question = (props) => {

//     let id = localStorage.getItem('question');
//     // localStorage.clear();
//     console.log(id);
//     let url = `https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&tagged=wordpress&site=stackoverflow&filter=withbody&key=WdEvgb3GVigWmCTYmwLwsQ((`;
    
//     axios.get(url)
//         .then(response => {
//             console.log(response.data.items[0].link)  
//         })
//     return ( 
//     <div>
//        fdsgsfd
//     </div>
//     )
// }

// export default Question;

let Question = (props) => {

    const [sort, setSort] = useState({type:'creation', order: 'desc'});
    const [data, setData] = useState([]);
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }
    let id = localStorage.getItem('question');
    
    let url = `https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&tagged=wordpress&site=stackoverflow&filter=withbody&key=WdEvgb3GVigWmCTYmwLwsQ((`;
    
    
    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => { 
            setData(result.items[0]);
        });
    }, []);

    const formatDate = (date) => {
        let asked = new Date(date * 1000);
        let displayDate =  `
            ${asked.getFullYear()}-${asked.getMonth() < 10 ? "0" + asked.getMonth() : asked.getMonth()}-${asked.getDate() < 10 ? "0" + asked.getDate() : asked.getDate()} `;
        return displayDate;
    }
    return (
        <div class={style.container}>
            <div className={style.header}>
                <h2>{data.title}</h2>
                <div className={style.info}>Asked { formatDate(data.creation_date) }</div>
            </div>
            <div className={style.main}>
                <div className={style.asside}>
                    <div className={style.vote}>
                        <svg aria-hidden="true" class="m0 svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"></path></svg>
                    </div>
                    <div>{data.score}</div>
                    <div className={style.vote}>
                        <svg aria-hidden="true" class="m0 svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"></path></svg>
                    </div>
                </div>

                <div className={style.body}>
                    
                    <div className={style.danger} dangerouslySetInnerHTML={{__html: data.body}}></div>
                                      
                    <div className={style.tags}>
                        <Tags tags={data.tags} />
                    </div>
                    <User user={data}/>
                </div>
                
            </div>
            
            <div className={style.comments}>
                
            </div>
        </div>
    );
}

export default Question;