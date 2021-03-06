import React, { Component } from 'react';
import RectBox from './RectBox';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate
} from "react-router-dom";

function Investments() {
    return (
        <div className='app'>
            <Link to='/MutualFunds'><RectBox accountSection='Mutual Funds' /> </Link>
            <Link to='/ProvidentFunds'><RectBox accountSection='Provident Funds' /></Link>
            <Link to='/Stocks'><RectBox accountSection='Stocks' /></Link>
            <Link to='/Bonds'><RectBox accountSection='Bonds' /></Link>
            <Link to='/RealEstate'><RectBox accountSection='Real Estate' /></Link>
            <Link to='/Resources'><RectBox accountSection='Resources' /></Link>
            {/* <Link to='/Account'><Box accountSection='Accounts' /></Link> */}

        </div>
    );

}

export default Investments;