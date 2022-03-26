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
        console.warn("state", this.state)
        fetch('http://localhost:8080/api1/changeemail', {
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
        //         //alert("Email Changed")
    }


    render() {
        return (
            <div className='a2'>

                <label>Current Email</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ cemail: e.target.value }) }} /><br /><br />

                <label>New Email</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ nemail: e.target.value }) }} /><br /><br />

                <label>Password</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />


                <Link to='/EmailChanged'><button onClick={() => this.email()}>Change Email</button></Link>



            </div>
        );
    }
}

export default ChangeEmail;