import React from "react";
import './SearchInput.css';

/*React Icons*/
import { ImSearch } from 'react-icons/im';

export const SearchInput = ({query, setQuery}) => {

    return (
        <div className='search-input'>
            <input type="search" 
                placeholder='Pesquisar' 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />

            <ImSearch className="searchIcon"/>
        </div>
    )
}