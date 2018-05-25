import React from 'react';
import './Search.css';
const Search= (props)=>{
    let {userSearch,userSearchVal,deleteSearchInput} = props;
    return(
        <div className="Search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text"
                       onChange={userSearchVal}
                       value={userSearch}
                       placeholder="search" />
                <i className="fa fa-times"
                   aria-hidden="true"
                   onClick={deleteSearchInput}
                ></i>
        </div>
    )
}

export default Search;