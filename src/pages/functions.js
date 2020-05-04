import React from 'react'

import AssetItem from '../components/asset-item'


// Get data promise
const getData = (q) => {
  return(
    fetch(`https://economicapp.io/api/asset/search/?${q}=bit`,
      {
        method: 'GET',
        headers:{
          'Authorization': 'Token 26704736d3a5c8712dc149fb67643608f0397267'
        }
      }
    )
    .then(response => response.json())
  )
}


// Return promise result from fetch
const getAssets = (q) => {
  console.log('entre al fetch')
  const promise = getData(q)
  promise.then(data => {
    console.log('data ==> ', data)
    // setAssets(data)
  })
}



// const renderSearchResults = (assets, q) => {
//   assets.forEach(item => {
//     if(item.name === q){
//       // return
//       //   {AssetItem key={item.key}/}
//       console.log('wa')
//     }
//   })
// }


const assetSearch = (event, el) => {
  var val = event.target.value
  console.log('q1: ', el.state.q)
  console.log('val1: ', val)
  setTimeout(() => {
    console.log('entre al timeout')
    console.log('q: ', el.state.q)
    console.log('val2: ', val)
    if(el.state.q == val){
      console.log('voy al fetch')
      // getAssets(q)
    }
  }, 2000)
  //setQ(val)
  el.setState({'q': val})
}

export { getAssets, assetSearch };