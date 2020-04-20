import React from 'react'

import AssetItem from '../components/asset-item'


const assetSearch = (event, query, setQuery, setAssets) => {

  let lastValue = event.target.value
  console.log('lastValue: ', lastValue)
  setQuery(lastValue)

  console.log('query: ', query)

  setTimeout(() => {
    if(query === lastValue){
      console.log(`Consideraremos: ${lastValue}`)

      getData(setAssets)

    }
  }, 3000)

}


const getData = async(setAssets) => {
  const response = await fetch('https://economicapp.io/api/asset/assets/?limit=50&offset=0',
    {
      method: 'GET',
      headers:{
        'Authorization': 'Token 26704736d3a5c8712dc149fb67643608f0397267'
      }
    }
  )
  const data = await response.json()
  console.log('data ==> ', data)
  setAssets(data)
}


const renderSearchResults = (assets, query) => {
  assets.forEach(item => {
    if(item.name === query){
      // return
      //   {AssetItem key={item.key}/}
      console.log('wa')
    }
  })
}



export { assetSearch, renderSearchResults };