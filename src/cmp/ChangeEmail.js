import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    //Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

class ChangeEmail extends Component {
    email() {
        const c = document.getElementById("cemail").value;
        const n = document.getElementById("nemail").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ cemail: c, nemail: n })

        };

        fetch('http://localhost:8080/api1/changeemail', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;
                if (data == "New email is the same as current email. No change made." || "This email has been taken, please choose some other email") {  
                    document.getElementById("output").style.color = 'red';
                }
                else {
                    document.getElementById("output").style.color = 'green';

                }


            });
        //         //alert("Email Changed")
    }


    render() {
        return (
            <div className='a2'>

                <label>Current Email</label><br />
                <input type="text" id="cemail"
                    onChange={(e) => { this.setState({ cemail: e.target.value }) }} /><br /><br />

                <label>New Email</label><br />
                <input type="text" id="nemail"
                    onChange={(e) => { this.setState({ nemail: e.target.value }) }} /><br /><br />


                <button onClick={() => this.email()}>Change Email</button>
                <div><p id="output"></p></div>


            </div>
        );
    }
}

export default ChangeEmail;