import React, { Component } from 'react';
import RectBox from './RectBox';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate
} from "react-router-dom";

function ChangeAccountDetails() {
    return (
        <div className='app'>
            <Link to='/ChangeName'><RectBox accountSection='Name' /> </Link>
            <Link to='/ChangePassword'><RectBox accountSection='Password' /></Link>
            <Link to='/ChangeEmail'><RectBox accountSection='Email' /></Link>
            {/* <Link to='/Account'><Box accountSection='Accounts' /></Link> */}

        </div>
    );

}

export default ChangeAccountDetails;