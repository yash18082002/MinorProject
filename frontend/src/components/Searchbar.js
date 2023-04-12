import React, { useState } from 'react'
import Data from "./Data.json";

function Searchbar({ placeholder, setOrigin, setDestination, num }) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  }
  const onSearch = (searchTerm, code) => {
    setValue(searchTerm);
    if (num === '1') {
      setOrigin(code)
    } else if (num === '2') {
      setDestination(code)
    }
  }
  return (
    <div className='searchContainer'>
      <div className='searchInner'>
        <input id='inp' type="text" placeholder={placeholder} value={value} onChange={onChange} />
        {/* <button onClick={() => onSearch(value)}>Search</button> */}
      </div>
      <div className='dropDown'>
        {Data.filter(item => {
          const searchTerm = value.toLowerCase();
          const place = item.label.toLocaleLowerCase();
          return searchTerm && place.startsWith(searchTerm) && place !== searchTerm;
        })
          // .slice(0,5) (to be used when dropdown is very long)
          .map((item) => (
            <div onClick={() => onSearch(item.label, item.name)} className='dropDownRow' key={item.label}>{item.label}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Searchbar