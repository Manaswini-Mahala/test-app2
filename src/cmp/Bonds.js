import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Bonds extends Component {

    bond() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        const i = document.getElementById("ia").value;
        const s = document.getElementById("savings").value;
        const b = document.getElementById("bn").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p, ia: i, savings: s, bn: b })

        };

        fetch('http://localhost:8080/api1/bonds', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;

            });

        //         //alert("bonds")
    }


    render() {
        return (
            <div className='app'>
                <label>Investment Amount</label><br />
                <input type="text" id='ia'
                    onChange={(e) => { this.setState({ ia: e.target.value }) }} /><br /><br />

                <label>Savings</label><br />
                <input type="text" id='savings'
                    onChange={(e) => { this.setState({ savings: e.target.value }) }} /><br /><br /><br />

                <label>Bond Names</label><br />
                <select name="bn" id="bn" onChange={(e) => { this.setState({ bn: e.target.value }) }}>
                    <option value="Aditya Birla Finance Limited">Aditya Birla Finance Limited</option>
                    <option value="Bajaj Finance Limited">Bajaj Finance Limited</option>
                    <option value="Darbhanga Motihari Transmission Company Limited">Darbhanga Motihari Transmission Company Limited</option>
                    <option value="Family Credit Limited">Family Credit Limited</option>
                    <option value="Fullerton India Credit Company Ltd">Fullerton India Credit Company Ltd</option>
                    <option value="Idfc Infrastructure Finance Limited">Idfc Infrastructure Finance Limited</option>
                    <option value="LnT Finance Ltd">LnT Finance Ltd</option>
                    <option value="Mahindra and Mahindra Financial Services Ltd">Mahindra and Mahindra Financial Services Ltd</option>
                    <option value="Sundaram finance Limited">Sundaram finance Limited</option>
                    <option value="Tata Capital Financial Services Limited">Tata Capital Financial Services Limited</option>
                    
                </select>

                <br /> <br /> <br />

                <button onClick={() => this.bond()}>Check</button><br />
                <div><p id="output"></p></div>

            </div>
        );
    }
}


export default Bonds;