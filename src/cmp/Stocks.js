import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Stocks extends Component {

    stock() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        const i = document.getElementById("iamount").value;
        const m = document.getElementById("mincome").value;
        const s = document.getElementById("stockname").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p, iamount: i, mincome: m, stockname: s })

        };

        fetch('http://localhost:8080/api1/stocks', requestOptions)
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

                <select name="stockname" id="stockname">  
                    <option value="Adani Enterprises">Adani Enterprises</option>
                    <option value="">Adani powers</option>
                    <option value="Adani powers">Alkyl Amines</option>
                    <option value="Apollo Tricoat Tubes">Apollo Tricoat Tubes</option>
                    <option value="Balaji Amines">Balaji Amines</option>
                    <option value="Capri Global Capital">Capri Global Capital</option>
                    <option value="Coforge">Coforge</option>
                    <option value="Deepak Nitrite">Deepak Nitrite</option>
                    <option value="GMM Pfaudler">GMM Pfaudler</option>
                    <option value="Tata Elxsi">Tata Elxsi</option>
                   
                </select>

                <br /> <br /> <br />

                <button onClick={() => this.stock()}>Check</button><br />
                <div><p id="output"></p></div>

            </div>
        );
    }
}


export default Stocks;