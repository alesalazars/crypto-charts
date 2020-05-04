import React, { useState } from 'react';

import Searchbar from '../components/searchbar';
import { getAssets, assetSearch } from './functions';

import './index.css';

class Index extends React.Component{

  // Asset json
  //const [assets, setAssets] = useState([])

  // Text input in searchbar
  //const [q, setQ] = useState('b')

  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      q: ''
    };
  }


  /*assetSearch = (event) => {
    var val = event.target.value
    console.log('q1: ', q)
    console.log('val1: ', val)
    setTimeout(() => {
      console.log('entre al timeout')
      console.log('q: ', q)
      console.log('val2: ', val)
      if(q == val){
        console.log('voy al fetch')
        // getAssets(q)
      }
    }, 2000)
    //setQ(val)
    this.setState({'q': val})
  }*/


  render(){
    return(
      <div className="index">
        <div className="sidebar">
          <h1 className="color-white bg-main logo f-uppercase color-white bg-main"><span className="f-bold">Crypto</span><span className="f-light">Charts</span></h1>
          <Searchbar 
            onChange={ (event) => { 
              assetSearch(event, this)
             } } 
            value={this.state.q}
          />
          <ul>
            {/* {renderSearchResults(assets, q)} */}
          </ul>
        </div>
        <div className="content">
          <p>(show react charts here)</p>
        </div>
      </div>
    )  
  }
}

export default Index;