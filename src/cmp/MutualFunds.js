import React, { Component } from 'react';
import {
    Redirect,
    Link,
    withRouter
} from "react-router-dom";


class MutualFunds extends Component {

    mutual() {

        const i = document.getElementById("iamount").value;
        const m = document.getElementById("mincome").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ iamount: i, mincome: m })

        };

        fetch('http://localhost:8080/api1/mutualfunds', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;

            });

        //         //alert("mutualfunds")
    }


    render() {
        return (
            <div className='app'>
                <label>Investment Amount</label><br />
                <input type="text" id='iamount'
                    onChange={(e) => { this.setState({ iamount: e.target.value }) }} /><br /><br />

                <label>Monthly Income</label><br />
                <input type="text" id='mincome'
                    onChange={(e) => { this.setState({ mincome: e.target.value }) }} /><br /><br /><br />

                <button onClick={() => this.mutual()}>Check</button><br/>
                <div><p id="output"></p></div>

            </div>
        );
    }
}

export default MutualFunds;