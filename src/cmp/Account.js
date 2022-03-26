import React, { Component } from 'react';
import RectBox from './RectBox';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate
} from "react-router-dom";

function Account() {
    return (
        <div className='app'>
            <Link to='/ChangeAccountDetails'><RectBox accountSection='Change Account Details' /> </Link>
            <Link to='/DeactivateAccount'><RectBox accountSection='Deactivate Account' /></Link>
            <Link to='/DeleteAccount'><RectBox accountSection='Delete Account' /></Link>
            {/* <Link to='/Account'><Box accountSection='Accounts' /></Link> */}

        </div>
    );

}

export default Account;