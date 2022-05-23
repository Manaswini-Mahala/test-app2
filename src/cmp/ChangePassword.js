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
        const e = Cookies.get("email");
        const n = document.getElementById("npassword").value;
        const c = document.getElementById("cpassword").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, npassword: n, cpassowrd: c })

        };

        fetch('http://localhost:8080/api1/changepassword', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;
                if (data == "New password is the same as current password. No change made." || "New password cannot be similar to email. Please enter some other password for change.") {  
                    document.getElementById("output").style.color = 'red';
                }
                else {
                    document.getElementById("output").style.color = 'green';

                }


            });
        //         //alert("Password Changed")
    }


    render() {
        return (
            <div className='a2'>

                <label>New Password</label><br />
                <input type="text" id="npassword"
                    onChange={(e) => { this.setState({ npassword: e.target.value }) }} /><br /><br />

                <label>Current Password</label><br />
                <input type="text" id="cpassword"
                    onChange={(e) => { this.setState({ cpassword: e.target.value }) }} /><br /><br />



                <button onClick={() => this.password()}>Change Password</button>
                <div><p id="output"></p></div>





            </div>
        );
    }
}

export default ChangePassword;