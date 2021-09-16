import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core'

 function Search() {
     const [input, setInput] = useState("");

     const search = e => {
         e.preventDefault();
     }
    return (
        <div className='search'>
        <div className='search__input'>
            <SearchIcon className='search__inputIcon'/>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <MicIcon />
        </div>
            <div className='search__buttons'>
                <Button variant='outlined' onClick={search}>Google-search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}
export default Search;