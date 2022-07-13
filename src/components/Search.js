import React from 'react'
import {Input} from 'antd';
const { Search } = Input;

const SearchBar = ({filterFunc}) => {
    
    const onSearch = (value) => {
        filterFunc(value)
    }
    
    return (
        <div> 
            <Search placeholder="input search text" onChange={(e)=>onSearch(e.target.value)} style={{ width: 400 }} />
        </div>
    )
}

export default SearchBar