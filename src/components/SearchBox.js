import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 br3 ba b--light-yellow bg-dark-gray white'
                type="search" 
                placeholder='search addresses'
                onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;