import React from 'react';

import Searchbar from '../components/searchbar';
import CoinItem from '../components/coin-item';

import './index.css';

const Index = () => {

  return(
    <div className="index">
      <div className="sidebar">
        <h1 className="main-color logo f-uppercase"><span className="f-bold">Crypto</span><span className="f-light">Charts</span></h1>
        <Searchbar/>
        <ul className="coin-list">
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
          <CoinItem name={'Name of the coin'}/>
        </ul>
      </div>
      <div className="content">
        <p>(show react charts here)</p>
      </div>
    </div>
  )

}

export default Index;