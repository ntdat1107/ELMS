import React            from "react";
import Header           from './HeaderGuest'
import SideBarGuest     from "./SideBarGuest";
import SearchMainPage   from "./SearchMainPage";
import './CSS/HomePage.css'

function SearchGuestUI() {
    return (
        <div id="searchGuestUI">
            <Header/>   
            <SideBarGuest/>
            <SearchMainPage/>
        </div>
    )
}

export default SearchGuestUI;