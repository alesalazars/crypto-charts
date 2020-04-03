import React, {useState, useEffect} from 'react';

import Searchbar from '../components/searchbar';
import { getAssets, listAssets } from './functions';

import './index.css';

const Index = () => {

  // Asset json
  const [assets, setAssets] = useState([])

  useEffect(() => {
 
    getAssets(setAssets)

  }, [])

  return(
    <div className="index">
      <div className="sidebar">
        <h1 className="main-color logo f-uppercase"><span className="f-bold">Crypto</span><span className="f-light">Charts</span></h1>
        <Searchbar/>
        { listAssets(assets) }
      </div>
      <div className="content">
        <p>(show react charts here)</p>
      </div>
    </div>
  )

}

export default Index;