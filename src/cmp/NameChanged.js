import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NameChanged extends Component{
    render(){
        return(
            <div className='app'>
                Name Changed Successfully!
                {/* <br/><br/>
                <Link to='./Auth'><button>Go To Login</button></Link> */}
            </div>
        );
    }
}

export default NameChanged;