import React from 'react'
import AnnounComponent from './AnnounComponent';
import './CSS/AdminAnnouncement.css'
import SearchBar from "../searchBar"
import searchImg from "./image/search.png"

function ListAnnoun() {
    return (
        <div id="listAnnoun">
            <div id="SearchList">
                <SearchBar searchImg={searchImg} name="SearchList" searchType="Search ..." />
            </div>

            <ul id="sublistAnnon">
                <AnnounComponent linkName=""
                                 receiver="C++ from Beginners to Object Oriented Data Structure  "
                                 subject="Test subject"
                                 content="This is a test message. 
                                        Please skip this message. Sorry about this convinience.
                                        Thank you very much
                                        Long."
                                 time="3.11.2021"                                 
                                 />
                <AnnounComponent linkName=""
                                 receiver="C++ from Beginners to Object Oriented Data Structure  "
                                 subject="Test subject"
                                 content="This is a test message. 
                                        Please skip this message. Sorry about this convinience.
                                        Thank you very much
                                        Long."
                                 time="3.11.2021"                                 
                                 />
                <AnnounComponent linkName=""
                                 receiver="C++ from Beginners to Object Oriented Data Structure  "
                                 subject="Test subject"
                                 content="This is a test message. 
                                        Please skip this message. Sorry about this convinience.
                                        Thank you very much
                                        Long."
                                 time="3.11.2021"                                 
                                 />
                <AnnounComponent linkName=""
                                 receiver="C++ from Beginners to Object Oriented Data Structure  "
                                 subject="Test subject"
                                 content="This is a test message. 
                                        Please skip this message. Sorry about this convinience.
                                        Thank you very much
                                        Long."
                                 time="3.11.2021"                                 
                                 />
                <AnnounComponent linkName=""
                                 receiver="C++ from Beginners to Object Oriented Data Structure  "
                                 subject="Test subject"
                                 content="This is a test message. 
                                        Please skip this message. Sorry about this convinience.
                                        Thank you very much
                                        Long."
                                 time="3.11.2021"                                 
                                 />
                <AnnounComponent linkName=""
                                 receiver="C++ from Beginners to Object Oriented Data Structure  "
                                 subject="Test subject"
                                 content="This is a test message. 
                                        Please skip this message. Sorry about this convinience.
                                        Thank you very much
                                        Long."
                                 time="3.11.2021"                                 
                                 />
                <AnnounComponent linkName=""
                                 receiver="C++ from Beginners to Object Oriented Data Structure  "
                                 subject="Test subject"
                                 content="This is a test message. 
                                        Please skip this message. Sorry about this convinience.
                                        Thank you very much
                                        Long."
                                 time="3.11.2021"                                 
                                 />                                  



            </ul>
        </div>
    )
}

export default ListAnnoun;
