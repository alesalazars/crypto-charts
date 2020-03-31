import React, {useEffect} from 'react';

import Searchbar from '../components/searchbar';
import AssetItem from '../components/asset-item';
import { getAssets } from './functions';

import './index.css';

const Index = () => {

  useEffect(() => {
 
    getAssets()

  }, [])

  return(
    <div className="index">
      <div className="sidebar">
        <h1 className="main-color logo f-uppercase"><span className="f-bold">Crypto</span><span className="f-light">Charts</span></h1>
        <Searchbar/>
        <ul className="asset-list">
          <AssetItem name={'Name of the asset'}/>
        </ul>
      </div>
      <div className="content">
        <p>(show react charts here)</p>
      </div>
    </div>
  )

}

export default Index;