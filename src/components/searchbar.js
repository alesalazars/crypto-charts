import React from 'react';
import '../pages/index.css';

const Searchbar = () => {
  return(
    <div className="p-relative">
      <i className="fas fa-search"></i>
      <input className="searchbar bg-grey" type="text" placeholder="Buscar..."></input>
    </div>
  )
}

export default Searchbar;