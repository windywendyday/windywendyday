import React from "react";
import './index.less'
import { Route, Routes} from "react-router-dom";
import Aboutme from "../Aboutme/Aboutme";
import Projects from "../Projects/Projects";
import Blogs from "../Blogs/Blogs";
import Ideas from "../Ideas/Ideas";
import SideBar from "../../components/SideBar/SideBar";

export default function Index(){
    return (
        <div className="index">
            <SideBar />
            <Routes>
                <Route path="aboutme" element={<Aboutme />}/>
                <Route path="projects" element={<Projects />}/>
                <Route path="blogs" element={<Blogs />}/>
                <Route path="ideas" element={<Ideas />}/>
            </Routes>
        </div>
    )
}