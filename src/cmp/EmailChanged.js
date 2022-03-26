import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmailChanged extends Component{
    render(){
        return(
            <div className='app'>
                Email Changed Successfully!
                {/* <br/><br/>
                <Link to='./Auth'><button>Go To Login</button></Link> */}
            </div>
        );
    }
}

export default EmailChanged;