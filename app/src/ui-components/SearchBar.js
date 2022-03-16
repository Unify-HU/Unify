import React, {useState} from 'react'
import { Offering} from '../models';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      if (searchInput.length > 0) {
          return Offering.name.match(searchInput);
      };
return <div> 
    <input
     type="search"
     placeholder="Search here"
     onChange={handleChange}
     value={searchInput} />
    <table>
        <tr>
            <th>Product</th>
            <th>Business</th>  
        </tr>
        {Offering => {<div>
            <tr>
                <td>{Offering.name}</td>
            </tr>
        </div>}}
    </table> </div>
};

export default SearchBar;