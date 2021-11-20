import React, { useState } from "react";

function SearchBar ({
    name,
    searchType,
    searchImg,
    history,
    callback = () => {}
}) {
    const [query, setQuery] = useState('')

    const submitHandler = (e) => {
        console.log(query)
        e.preventDefault()
        if(query.trim()) {
            history.push(`/search/${query}`)
            console.log(`/search/${query}`)
        } else {
            history.push(`/search`)
            console.log(`/search`)
        }
    }
    return (
        <form onSubmit = {submitHandler} style={{display: 'flex'}}>
            <input id="Input" type="text" name={name} onChange = {(e) => setQuery(e.target.value)}  placeholder={searchType} ></input>
            <button type = "submit" className="Link-coursename" id="search-btn">
                <img src={searchImg} alt="SearchIconImage" id="search-icon" />
            </button>
        </form>
    )
}

export default SearchBar;