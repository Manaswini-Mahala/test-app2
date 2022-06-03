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

    constructor(props) {
        super(props)

        this.state = { name: 0, email: 0, accountno: 0, ifsc: 0, accountbal: 0, month: 0, year: 0 };
    }

    view() {
        const p = Cookies.get("password");
        const e = Cookies.get("email");
        
        
        
        //console.log(Cookies.get('email'))

        const requestOptions = {
            method: 'PUT',
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
                this.setState({ name: data[0], email: data[1], accountno: data[2], ifsc: data[3], accountbal: data[4], month: data[5], year: data[6] });




            });
        //         //alert("Name Changed")
    }


    render() {
        return (
            <div className='a2'>

                <h2>Account Details</h2>

                <label>Name: </label><p> {this.state.name}</p><br />
                <label>Email: </label><p> {this.state.email}</p><br />
                <label>Account Number: </label><p> {this.state.accountno}</p><br />
                <label>IFSC Code: </label><p> {this.state.ifsc}</p><br />
                <label>Account Balance: </label><p> {this.state.accountbal}</p><br />
                <label>Month of Registration: </label><p> {this.state.month}</p><br />
                <label>Year of Registration: </label><p> {this.state.year}</p><br />
                
                {/* <div><p id="output"></p></div> */}



            </div>
        );
    }
}

export default ViewDetails;