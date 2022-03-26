import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    //Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

class ChangePassword extends Component {
    password() {
        console.warn("state", this.state)
        fetch('http://localhost:8080/api1/changepassword', {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);

            })

        })
        //         //alert("Password Changed")
    }


    render() {
        return (
            <div className='a2'>

                <label>Email</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />

                <label>New Password</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ npassword: e.target.value }) }} /><br /><br />

                <label>Current Password</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ cpassword: e.target.value }) }} /><br /><br />



                <Link to='/PasswordChanged'><button onClick={() => this.password()}>Change Password</button></Link>



            </div>
        );
    }
}

export default ChangePassword;