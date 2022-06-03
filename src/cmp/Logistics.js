import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { PieChart, Pie, Tooltip } from 'recharts';


class Logistics extends Component {
    //const piedata=[{name: 'savings', value: 100}, {name: 'expenses', value: 100}];

    log() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        //const piedata=[{name: 'savings', value: 100}, {name: 'expenses', value: 100}];

        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p })

        };

        fetch('http://localhost:8080/api1/logs', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;

                const savings = parseInt(data.split('#')[0]);
                const expenses = parseInt(data.split('#')[1]);


            });

        //         //alert("logistics")
    }


    render() {
        return (
            <div className='app'>

                <button onClick={() => this.log()}>Click to check your logs</button><br />
                <div><p id="output"></p></div>

                <PieChart width={300} height={300}>
                    <Pie label dataKey='value' data={[{ name: 'savings', value: savings }, { name: 'expenses', value: expenses }]} fill="#000"></Pie>
                    <Tooltip />
                </PieChart>

            </div>
        );
    }
}


export default Logistics;

/*
total=100#70
savings=parseInt(total.split('#')[0])
expenses=parseInt(total.split('#')[1])


*/