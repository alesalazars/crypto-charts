import React, { useState } from 'react';

import Searchbar from '../components/searchbar';
import { assetSearch } from './functions';

import './index.css';

const Index = () => {

  // Asset json
  const [assets, setAssets] = useState([])

  // Text input in searchbar
  const [query, setQuery] = useState('')


  return(
    <div className="index">
      <div className="sidebar">
        <h1 className="color-white bg-main logo f-uppercase color-white bg-main"><span className="f-bold">Crypto</span><span className="f-light">Charts</span></h1>
        <Searchbar 
          onChange={ (event) => {
            assetSearch(event, query, setQuery)
            // assetSearch(event, query, setAssets)
          } } 
          // value={query}
        />
        <ul>
          {/* {renderSearchResults(assets, query)} */}
        </ul>
      </div>
      <div className="content">
        <p>(show react charts here)</p>
      </div>
    </div>
  )

}

export default Index;