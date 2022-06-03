import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Currency extends Component {

    currencies() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        const s = document.getElementById("savings").value;
        const c = document.getElementById("currency").value;
    
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p, savings: s, currency: c })

        };

        fetch('http://localhost:8080/api1/currencies', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;

            });

        //         //alert("currencies")
    }


    render() {
        return (
            <div className='app'>
                <label>Savings (in Rupees)</label><br />
                <input type="text" id='savings'
                    onChange={(e) => { this.setState({ savings: e.target.value }) }} /><br /><br />


                <label>Stock Names</label><br />
                <select name="currency" id="currency" onChange={(e) => { this.setState({ currency: e.target.value }) }}>
                    <option value="Bahraini Dinar"> Bahraini Dinar</option>
                    <option value="British Pound Sterling">British Pound Sterling</option>
                    <option value="Canadian Dollar">Canadian Dollar</option>
                    <option value="Cayman Islands Dollar">Cayman Islands Dollar</option>
                    <option value="European Euro">European Euro</option>
                    <option value="Jordanian Dollar">Jordanian Dollar</option>
                    <option value="Kuwaiti Dinar">Kuwaiti Dinar</option>
                    <option value="Omani Rial">Omani Rial</option>
                    <option value="Swiss Franc">Swiss Franc</option>
                    <option value="US Dollar">US Dollar</option>

                </select>

                <br /> <br /> <br />

                <button onClick={() => this.currencies()}>Check</button><br />
                <div><p id="output"></p></div>

            </div>
        );
    }
}


export default Currency;