import React from 'react';
import '../pages/index.css';

const AssetItem = (props) => {

  let icon
  if(props.symbol){
    icon = <p className="symbol">{props.symbol}</p>
  }else{
    icon = <i className="fas fa-dollar-sign"></i>
  }

  return(
    <li className="asset" key={props.key}>
      {/* <img src={props.src} alt={props.alt}/> */}
      {icon}
      <p>{props.name}</p>
    </li>
  )
}

export default AssetItem;