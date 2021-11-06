import React            from "react";
import Header from "../header";
import avt from "../../img/cheems.png"
import SideBar from "../sideBarLearner";
import SearchMainPage   from "./SearchMainPage";

import './CSS/HomePage.css'

import './CSS/Search.css'
function SearchLearnerUI() {
    return (
        <div id="searchLearnerUI">
            <Header 
                linkAvt="/learner/manageprofile" 
                link="/learner/dashboard" 
                srcImg={avt} 
                name="Lâm Thành Dương" 
                gmail="lamduong11201@gmail.com" 
                type="Learner"
                idName="information"
            />
            <SideBar/>
            <SearchMainPage/>
        </div>
    )
}

export default SearchLearnerUI;