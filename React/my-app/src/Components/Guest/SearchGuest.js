import React            from "react";
import Header           from '../Header/header'
import SideBarGuest     from "./SideBarGuest";

import SearchMainPage   from "./SearchMainPage";

import { FloatBar } from "./SearchMainPage";
import './CSS/HomePage.css'

import './CSS/Search.css'
function SearchGuestUI() {
    return (
        <div id="searchGuestUI">
            <Header link="/" typeUserTemp={-1} />   
            <FloatBar/>
            <SideBarGuest/>
            <SearchMainPage/>
        </div>
    )
}

export default SearchGuestUI;