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


let lastValue = null

// Define last inputted full value
const defineInput = (val, query, setQuery) => {

  lastValue = val
  console.log('val: ', val)

  setTimeout(() => {
    if(lastValue === val){
      console.log(`Consideraremos: ${val}`)
      setQuery(val)
      console.log('query es: ', query)
    }
  }, 3000)

}


// Return promise result from fetch
const getAssets = (query) => {
  const promise = getData(query)
  promise.then(data => {
    console.log('data ==> ', data)
    // setAssets(data)
  })
}


// Search assets
const assetSearch = (event, query, setQuery) => {
  let val = event.target.value
  defineInput(val, query, setQuery)
  getAssets(query)
}


// const renderSearchResults = (assets, query) => {
//   assets.forEach(item => {
//     if(item.name === query){
//       // return
//       //   {AssetItem key={item.key}/}
//       console.log('wa')
//     }
//   })
// }


export { assetSearch };