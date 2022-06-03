import React, { Component } from 'react';
import Cookies from 'js-cookie';

import {
    BrowserRouter as Router,
    //Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

class ViewDetails extends Component {


    view() {
        const p = Cookies.get("password");
        const e = Cookies.get("email");
        
        
        
        //console.log(Cookies.get('email'))

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p })

        };

        fetch('http://localhost:8080/api1/viewdetails', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;
                




            });
        //         //alert("View Details")
    }


    render() {
        return (
            <div className='a2'>
                

                <h2>Account Details</h2>

                <button onClick={() => this.view()}>View Details</button><br />
                <pre id="output"></pre>



            </div>
        );
    }
}

export default ViewDetails;