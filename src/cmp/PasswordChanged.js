import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PasswordChanged extends Component{
    render(){
        return(
            <div className='app'>
                Password Changed Successfully!
                {/* <br/><br/>
                <Link to='./Auth'><button>Go To Login</button></Link> */}
            </div>
        );
    }
}

export default PasswordChanged;