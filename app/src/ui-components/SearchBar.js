import React, {useState, useEffect} from 'react';
import { Offering} from '../models';
import List from './List';

export default function SearchBar(){
    const [search, setSearch] = useState('')

    return(
        <div>
            <h3 className="title">Offerings</h3>
            <input 
                type="text" 
                placeholder="Search name" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            /> 
        <List Offerings={Offering}/>
        </div>
    )
};