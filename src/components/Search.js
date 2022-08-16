import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = ({handleSearchNote}) => {
    return (
        <div className='search'>
            <FontAwesomeIcon 
            className="search-icon"
            icon={faSearch} />
            <input 
                onChange={(event)=>handleSearchNote(event.target.value)}
                type='text' 
                placeholder='type to search...' 
            /> 
        </div>
    )
}

export default Search;