import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    //Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

class ChangeName extends Component {

    name() {
        console.warn("state", this.state)
        fetch('http://localhost:8080/api1/changename', {
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
        //         //alert("Name Changed")
    }


    render() {
        return (
            <div className='a2'>

                <label>Current Name</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ cname: e.target.value }) }} /><br /><br />

                <label>New Name</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ nname: e.target.value }) }} /><br /><br />

                <label>Password</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />

                <label>Email</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />

                <Link to='/NameChanged'><button onClick={() => this.name()}>Change Name</button></Link>



            </div>
        );
    }
}

export default ChangeName;