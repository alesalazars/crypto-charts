import React from 'react';
import '../pages/index.css';

const AssetItem = (props) => {

  let icon
  if(props.symbol){
    icon = <p className="symbol color-white bg-secondary my-10">{props.symbol}</p>
  }else{
    icon = <i className="fas fa-dollar-sign"></i>
  }

  return(
    <li className="asset px-20" key={props.key}>
      {/* <img src={props.src} alt={props.alt}/> */}
      {icon}
      <p className="color-main my-10">{props.name}</p>
    </li>
  )
}

export default AssetItem;