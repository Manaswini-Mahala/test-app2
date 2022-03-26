import React, { Component } from 'react';
import {
    Navigate,
    Link
} from "react-router-dom";


class DeactivateAccount extends Component {

    deactivate() {
        console.warn("state", this.state)
        fetch('http://localhost:8080/api1/deactivate', {
            method: "POST",
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
        //         //alert("deactivated")
    }



    render() {
        return (
            <div className='a2'>
                <label>Name</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />

                <label>Email</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />

                <label>Password</label><br />
                <input type="text"
                    onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />

                <Link to='/AccountDeactivated'><button onClick={() => this.deactivate()}>Deactivate</button></Link>

            </div>
        );
    }
}

export default DeactivateAccount;