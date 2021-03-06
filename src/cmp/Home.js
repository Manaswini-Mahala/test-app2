import React, { Component } from 'react';
import Box from './Box';
import Savings from './Savings';
import Expenses from './Expenses';
import Investments from './Investments';
import Account from './Account';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate
} from "react-router-dom";

function Home() {



    //     const[users] = useState([
    //       {heading: 'Savings'},
    //       {heading: 'Expenses'},
    //       {heading: 'Investment'}
    //       {heading: 'Account'}


    //     ]);

    return (
        <div className="app">


            <Link to='/Savings'><Box heading='Savings' /> </Link>
            <Link to='/Expenses'><Box heading='Expenses' /></Link>
            <Link to='/Investments'><Box heading='Investments' /></Link>
            <Link to='/Logs'><Box heading='Logs' /></Link>
            <Link to='/Goals'><Box heading='Goals' /></Link>
            <Link to='/Account'><Box heading='Accounts' /></Link>

            


        </div>
    );
}



export default Home;