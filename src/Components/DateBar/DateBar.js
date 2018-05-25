import React from 'react'
import './DateBar.css'

const DateBar = ()=>{
    let date = new Date();
    let days =["Monday","Tuesday","Wednesday","Thursday","Friday","Suturday","Sunday"];
    var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return(
        <div className="Datebar">
            <div className="Datebar_wrap">
                <p className="Datebar_num">{date.getDate()}</p>
                <div className="Datebar_monthYear">
                    <p className="Datebar_month">{month[date.getMonth()]}</p>
                    <p className="Datebar_year">{date.getFullYear()}</p>
                </div>
            </div>
            <p className="Datebar_day">{days[date.getDay()- 1]}</p>
        </div>
    )
}

export default DateBar;