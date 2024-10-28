
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/productSlice';

function SearchBar() {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));  
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
