import React, { Component } from 'react';
import {
    Redirect,
    Link,
    withRouter
} from "react-router-dom";


class Savings extends Component {

    savings() {

        const s = document.getElementById("salary").value;
        const e = document.getElementById("expenditure").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ salary: s, expenditure: e })

        };

        fetch('http://localhost:8080/api1/netsavings', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;
                if (data == "Your monthly expenditure is greater than or equal to your monthly salary. Please make use of our application to monitor your expenses and improve your savings.") {  
                    document.getElementById("output").style.color = 'red';
                }
                else {
                    document.getElementById("output").style.color = 'green';

                }


            });

        //         //alert("savings")
    }


    render() {
        return (
            <div className='app'>
                <label>Salary</label><br />
                <input type="text" id='salary'
                    onChange={(e) => { this.setState({ cbalance: e.target.value }) }} /><br /><br />

                <label>Expenditure</label><br />
                <input type="text" id='expenditure'
                    onChange={(e) => { this.setState({ month: e.target.value }) }} /><br /><br /><br />

                <button onClick={() => this.savings()}>Check Savings</button><br/>
                <div><p id="output"></p></div>

            </div>
        );
    }
}

export default Savings;