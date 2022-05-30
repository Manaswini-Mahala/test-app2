import React, { Component } from 'react';
import Cookies from 'js-cookie';
import {
    Redirect,
    Link,
    withRouter
} from "react-router-dom";


class ProvidentFunds extends Component {

    provident() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        const i = document.getElementById("iamount").value;
        const a = document.getElementById("aincome").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p, iamount: i, aincome: a })

        };

        fetch('http://localhost:8080/api1/mutualfunds', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;

            });

        //         //alert("providentfunds")
    }


    render() {
        return (
            <div className='app'>
                <label>Investment Amount</label><br />
                <input type="text" id='iamount'
                    onChange={(e) => { this.setState({ iamount: e.target.value }) }} /><br /><br />

                <label>Annual Income</label><br />
                <input type="text" id='aincome'
                    onChange={(e) => { this.setState({ aincome: e.target.value }) }} /><br /><br /><br />

                <button onClick={() => this.provident()}>Check</button><br/>
                <div><p id="output"></p></div>

            </div>
        );
    }
}

export default ProvidentFunds;