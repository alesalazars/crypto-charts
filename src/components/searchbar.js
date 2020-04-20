import React from 'react';
import '../pages/index.css';

const Searchbar = (props) => {
  return(
    <div className="p-relative">
      <i className="fas fa-search"></i>
      <input className="searchbar bg-grey" type="text" placeholder="Buscar..." onChange={props.onChange} value={props.value}></input>
    </div>
  )
}

export default Searchbar;