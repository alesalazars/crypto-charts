import React from 'react';
import '../pages/index.css';

const Searchbar = () => {
  return(
    <div className="p-relative">
      <i class="fas fa-search"></i>
      <input className="searchbar" type="text" placeholder="Buscar..."></input>
    </div>
  )
}

export default Searchbar;