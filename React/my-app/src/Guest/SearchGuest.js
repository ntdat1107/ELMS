import React            from "react";
import Header           from './HeaderGuest'
import SideBarGuest     from "./SideBarGuest";

import SearchMainPage   from "./SearchMainPage";

import { FloatBar } from "./SearchMainPage";
import './CSS/HomePage.css'

import './CSS/Search.css'
function SearchGuestUI() {
    return (
        <div id="searchGuestUI">
            <Header/>   
            <FloatBar/>
            <SideBarGuest/>
            <SearchMainPage/>
        </div>
    )
}

export default SearchGuestUI;