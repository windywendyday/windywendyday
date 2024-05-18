import React, { useState } from "react";
import sideItemIcon from "../../assets/tape.jpg"
import './index.less'

export default function Index(){
    let [time, setTime] = useState('')
    // const sideItems = 
    function formatTime(){
        let nowTime = new Date()
        //日期
        let DD = String(nowTime.getDate()).padStart(2, '0'); // 获取日
        let MM = String(nowTime.getMonth() + 1).padStart(2, '0'); //获取月份，1 月为 0
        let yyyy = nowTime.getFullYear(); // 获取年

        return time = yyyy + '-' + MM + '-' + DD 
    }
    
    
    return (
        <div className="sideBar">
            <div>
                <span>Today is {formatTime()}</span>
            </div>
            <div className="sideItem">
                <img src={sideItemIcon} className="sideItemIcon"></img>
                <span className="sideItemLabel">About me</span>
            </div>
            <div className="sideItem">
                <img src={sideItemIcon} className="sideItemIcon"></img>
                <span className="sideItemLabel">Projects</span>
            </div>
            <div className="sideItem">
                <img src={sideItemIcon} className="sideItemIcon"></img>
                <span className="sideItemLabel">Blogs</span>
            </div>
            <div className="sideItem">
                <img src={sideItemIcon} className="sideItemIcon"></img>
                <span className="sideItemLabel">Ideas</span>
            </div>
        </div>
    )
}