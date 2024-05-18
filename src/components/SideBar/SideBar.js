import React from "react";
import './SideBar.less';
import { useNavigate } from "react-router-dom";
import sideItemIcon from "../../assets/tape.jpg"

export default function sideBar() {
    const navigate = useNavigate()
    
    function navigateTo(path){
        console.log(path)
        navigate(path)
    }

    return (
        <div className="sideBar">
            <div className="sideItem" onClick={() => navigateTo('/index/aboutme')}>
                <img src={sideItemIcon} className="sideItemIcon"></img>
                <span className="sideItemLabel">About me</span>
            </div>
            <div className="sideItem" onClick={() => navigateTo('/index/projects')}>
                <img src={sideItemIcon} className="sideItemIcon"></img>
                <span className="sideItemLabel">Projects</span>
            </div>
            <div className="sideItem" onClick={() => navigateTo('/index/blogs')}>
                <img src={sideItemIcon} className="sideItemIcon"></img>
                <span className="sideItemLabel">Blogs</span>
            </div>
            <div className="sideItem" onClick={() => navigateTo('/index/ideas')}>
                <img src={sideItemIcon} className="sideItemIcon"></img>
                <span className="sideItemLabel">Ideas</span>
            </div>
        </div>
    )
}