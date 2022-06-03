import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Goals extends Component {

    goal() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        const s = document.getElementById("savings").value;
        const m = document.getElementById("mincome").value;
        const pr = document.getElementById("price").value;
        const g = document.getElementById("goal").value;


        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p, savings: s, mincome: m, price: pr, goal: g })

        };

        fetch('http://localhost:8080/api1/goals', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;

            });

        //         //alert("goals")
    }


    render() {
        return (
            <div className='app'>
                <label>Savings</label><br />
                <input type="text" id='savings'
                    onChange={(e) => { this.setState({ savings: e.target.value }) }} /><br /><br />


                <label>Type of Goal</label><br />
                <select name="goal" id="goal" onChange={(e) => { this.setState({ goal: e.target.value }) }}>
                    <option value="Car">Car</option>
                    <option value="House">House</option>
                    <option value="Other">Other</option>
                
                </select><br /><br />

                <label>Monthly Income</label><br />
                <input type="text" id='mincome'
                    onChange={(e) => { this.setState({ mincome: e.target.value }) }} /><br /><br />

                <label>Price</label><br />
                <input type="text" id='price'
                    onChange={(e) => { this.setState({ price: e.target.value }) }} />


                <br /> <br /> <br />

                <button onClick={() => this.goal()}>Check</button><br />
                <div><p id="output"></p></div>

            </div>
        );
    }
}


export default Goals;