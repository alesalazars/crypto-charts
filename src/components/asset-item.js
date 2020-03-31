import React from 'react';
import '../pages/index.css';

const AssetItem = (props) => {
  return(
    <li>
      <img src={props.src} alt={props.alt}/>
      <i className="fas fa-dollar-sign"></i>
      <p>{props.name}</p>
    </li>
  )
}

export default AssetItem;