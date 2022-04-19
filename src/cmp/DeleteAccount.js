import React, { Component } from 'react';
import {
    Navigate,
    Link
} from "react-router-dom";

class DeleteAccount extends Component{

    delete() {
        const n = document.getElementById("name").value;
        const e = document.getElementById("email").value;
        const p = document.getElementById("password").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ name: n, email: e, password: p })

        };

        fetch('http://localhost:8080/api1/deleteaccount', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                
                if (data == "No such account exists. Account deletion unsuccessful." || "Account deletion unsuccessful.") {  
                    document.getElementById("output").innerHTML = data;
                    document.getElementById("output").style.color = 'red';
                }
                else {
                    alert("Account deleted successfully")
                    this.props.history.push('/auth')

                }


            });
        //         //alert("deactivated")
    }


    render(){
        return(
            <div className='app'>
                
                <label>Name</label><br />
                <input type="text" id="name"
                    onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />

                <label>Email</label><br />
                <input type="text" id="email"
                    onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />

                <label>Password</label><br />
                <input type="text" id="password"
                    onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />

               <button onClick={() => this.delete()}>Delete Account</button>
               <div><p id="output"></p></div>


            </div>
        );
    }
}

export default DeleteAccount;