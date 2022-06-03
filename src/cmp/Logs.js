import React, { Component } from 'react';
import RectBox from './RectBox';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate
} from "react-router-dom";

class Logs extends Component{
    render(){
        return(
            <div className='app'>
            <Link to='/Logistics'><RectBox accountSection='Logistics' /> </Link>
            <Link to='/Currency'><RectBox accountSection='Currency' /></Link>

        </div>
        );
    }
}

export default Logs;