import React            from "react";
import Header from "../Header/header";
import avt from "../../img/cheems.png"
import SideBar from "../SideBar/SideBar";
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
                typeUserTemp={2}
            />
            <SideBar typeUserTemp={2}/>
            <SearchMainPage/>
        </div>
    )
}

export default SearchLearnerUI;