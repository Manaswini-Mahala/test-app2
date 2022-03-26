import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountDeactivated extends Component{
    render(){
        return(
            <div className='app'>
                Account Deactivated Successfully!
                {/* <br/><br/>
                <Link to='./Auth'><button>Go To Login</button></Link> */}
            </div>
        );
    }
}

export default AccountDeactivated;