import React from 'react';
import '../pages/index.css';

const CoinItem = (props) => {
  return(
    <li>
      <img src={props.src} alt={props.alt}/>
      <i class="fas fa-dollar-sign"></i>
      <p>{props.name}</p>
    </li>
  )
}

export default CoinItem;