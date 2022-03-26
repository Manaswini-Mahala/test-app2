import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    //Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
        
            <div className='nav'>
                <Link to="home" ><label  >Home</label> </Link>
                <Link to="about" ><label>About</label> </Link>
                <Link to="/" ><label>Login</label> </Link>
            </div>
            
        );
    }
}

export default Nav;