import React, { Component } from 'react';
import Cookies from 'js-cookie';

class RealEstate extends Component {

    real() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        const b = document.getElementById("budget").value;
        const bh = document.getElementById("bhk").value;
        const c = document.getElementById("city").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p, budget: b, bhk: bh, city: c })

        };

        fetch('http://localhost:8080/api1/realestate', requestOptions)
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
                <label>Budget</label><br />
                <input type="text" id='budget'
                    onChange={(e) => { this.setState({ budget: e.target.value }) }} /><br /><br />

                <label>BHK</label><br />
                <input type="text" id='bhk'
                    onChange={(e) => { this.setState({ bhk: e.target.value }) }} /><br /><br /><br />

                <label>City</label><br />
                <select name="city" id="city" onChange={(e) => { this.setState({ city: e.target.value }) }}>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>

                </select>

                <br /> <br /> <br />

                <button onClick={() => this.real()}>Check</button><br />
                <div><p id="output"></p></div>

            </div>
        );
    }
}


export default RealEstate;