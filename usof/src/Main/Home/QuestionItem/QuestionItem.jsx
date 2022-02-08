import React from 'react';
import { NavLink, Route, Routes} from 'react-router-dom';
import style from './../Home.module.css';
import Tags from './Tags';
import axios from 'axios';
import User from './User';


const QuestionItem = (props) => {
    let startedText = () => { 
        let text = '';
        if(props.item.last_activity_date === props.item.creation_date) {
            text += 'asked';
        } else {
            text += 'modified';
        }
        let now = Date.now();
        text += ' ' + Math.ceil((now  - props.item.last_activity_date * 1000) / 60000) + ' min ago';
        return text;
    } 
     
    let setData = () => {
        localStorage.setItem('question', props.item.question_id)
    }

    return (
        <div className={style.item} key={props.item.question_id}>
            <div className={style.cp}>
                <div className={style.votes}>
                    <div className={style.counts}>{props.item.score}</div>
                    <div>votes</div>
                </div>
                <div className={ style.answer + ' ' + (props.item.answer_count ? style.answered : '') }>
                    <div className={style.counts}>{props.item.answer_count}</div>
                    <div>answers</div>
                </div>
                <div className={style.views}>
                    <div className={style.counts}>{props.item.view_count}</div>
                    <div>views</div>
                </div>
            </div>
            <div className={style.summary}>
                <NavLink to={`/question/${props.item.question_id}/${props.item.title}`} >
                    <div className={style.title} onClick={setData}>{props.item.title}</div>
                </NavLink>
                <Tags tags={props.item.tags} />
            </div>
            <User user={props.item} />
        </div>
    )
}

export default QuestionItem;