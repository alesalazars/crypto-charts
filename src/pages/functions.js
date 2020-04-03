import React from 'react';

import AssetItem from '../components/asset-item';

const getAssets = async(setAssets) => {
  const response = await fetch('https://economicapp.io/api/asset/assets',
    {
      method: 'GET',
      headers:{
        'Authorization': 'Token 26704736d3a5c8712dc149fb67643608f0397267'
      }
    }
  )
  const data = await response.json()

  console.log('data ===> ', data.results)

  const assetArray = data.results
  setAssets(assetArray)
}


const listAssets = (assets) => {
  let aux = []
  for(let i = 0 ; i < assets.length ; i++){
    aux.push(
      <AssetItem key={assets[i].id} name={assets[i].name} symbol={assets[i].symbol}/>
    )
  }

  return(
    <ul className="asset-list">
      {aux}
    </ul>
  )
}

export { getAssets, listAssets };

