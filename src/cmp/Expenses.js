import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Expenses extends Component {
    expenses() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        const s = document.getElementById("salary").value;
        const r = document.getElementById("rent").value;
        const t = document.getElementById("transport").value;
        const i = document.getElementById("insurance").value;
        const f = document.getElementById("food").value;
        const c = document.getElementById("ce").value;
        const u = document.getElementById("utility").value;
        const tr = document.getElementById("travel").value;
        const pe = document.getElementById("personal").value;
        const l = document.getElementById("loan").value;
        const cc = document.getElementById("cce").value;
        const o = document.getElementById("other").value;


        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p, salary: s, rent: r, transport: t, insurance: i, food: f, c: c, utility: u, travel: tr, personal: pe, loan: l, cce: cc, other: o })

        };

        fetch('http://localhost:8080/api1/expenditures', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;
                if (data == "You are spending more that you are earning per year. Please make use of our application to monitor your expenses and improve your savings.") {
                    document.getElementById("output").style.color = 'red';
                }
                else if (data == "You are spending all your earnings on expenses. Please make use of our application to monitor your expenses and improve your savings.") {
                    document.getElementById("output").style.color = 'red';
                }
                else {
                    document.getElementById("output").style.color = 'green';

                }


            });

        //         //alert("expenses")
    }


    render() {
        return (
            <div className='app'>
                <label>Salary</label><br />
                <input type="text" id='salary'
                    onChange={(e) => { this.setState({ salary: e.target.value }) }} /><br /><br />

                <label>Rent</label><br />
                <input type="text" id='rent'
                    onChange={(e) => { this.setState({ rent: e.target.value }) }} /><br /><br />

                <label>Transport</label><br />
                <input type="text" id='transport'
                    onChange={(e) => { this.setState({ transport: e.target.value }) }} /><br /><br />

                <label>Insurance</label><br />
                <input type="text" id='insurance'
                    onChange={(e) => { this.setState({ insurance: e.target.value }) }} /><br /><br />

                <label>Food</label><br />
                <input type="text" id='food'
                    onChange={(e) => { this.setState({ food: e.target.value }) }} /><br /><br />

                <label>Cell Phone bills</label><br />
                <input type="text" id='ce'
                    onChange={(e) => { this.setState({ ce: e.target.value }) }} /><br /><br />

                <label>Utility</label><br />
                <input type="text" id='utility'
                    onChange={(e) => { this.setState({ utility: e.target.value }) }} /><br /><br />

                <label>Travel</label><br />
                <input type="text" id='travel'
                    onChange={(e) => { this.setState({ travel: e.target.value }) }} /><br /><br />

                <label>Personal Upkeep</label><br />
                <input type="text" id='personal'
                    onChange={(e) => { this.setState({ personal: e.target.value }) }} /><br /><br />

                <label>Loan</label><br />
                <input type="text" id='loan'
                    onChange={(e) => { this.setState({ loan: e.target.value }) }} /><br /><br />

                <label>Child Care</label><br />
                <input type="text" id='cce'
                    onChange={(e) => { this.setState({ cce: e.target.value }) }} /><br /><br />

                <label>Other</label><br />
                <input type="text" id='other'
                    onChange={(e) => { this.setState({ other: e.target.value }) }} /><br /><br /><br />

                <button onClick={() => this.expenses()}>Check Average Expenditure</button><br />
                <div><p id="output"></p></div>

            </div>
        );
    }
}

export default Expenses;