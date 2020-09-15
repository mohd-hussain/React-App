import React from 'react';

function SearchBox({searchfield,searchChange}){
    return(
        <div className="pd2">
            <input
                className="pa3 mb5 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Here" 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;