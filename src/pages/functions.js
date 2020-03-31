import React from 'react';

const getAssets = async() => {
  const response = await fetch('http://68.183.27.16/api/asset/assets',
    {
      method: 'GET',
      headers:{
        'Authorization': 'Token 26704736d3a5c8712dc149fb67643608f0397267'
      }
    }
  )
  const data = await response.json()

  console.log('data ===> ', data)
}

export { getAssets };

