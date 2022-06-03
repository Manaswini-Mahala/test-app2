import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { PieChart, Pie, Tooltip } from 'recharts';

//var savings = 0;
//var expenses = 0;
class Logistics extends Component {

    constructor(props) {
        super(props)

        this.state = { savings: 0, expenses: 0 };
    }

    log() {

        const e = Cookies.get("email");
        const p = Cookies.get("password");
        //const piedata=[{name: 'savings', value: 100}, {name: 'expenses', value: 100}];

        const requestOptions = {
            method: 'POST',
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
                document.getElementById("output").innerHTML = data.split('#').join('<br>');

                const savingString = data.split('#')[0];
                const expString = data.split('#')[1].split('Rs.')[2].substring(1);

                const savingSub = savingString.substring(savingString.indexOf('Rs.') + 3, savingString.indexOf('from') - 1);
                const expSub = expString.includes('Percentage') ? expString.substring(0, expString.indexOf('P') - 1) : expString.substring(0, expString.indexOf('Y') - 1);

                this.setState({ savings: parseInt(savingSub), expenses: parseInt(expSub) });

                //piedata=[{name: 'savings', value: 100}, {name: 'expenses', value: 100}];

            });

        //         //alert("logistics")
    }


    render() {
        return (
            <div className='app'>

                <button onClick={() => this.log()}>Click to check your logs</button><br />
                <div><p id="output"></p></div>

                <PieChart width={300} height={300}>
                    <Pie label dataKey='value' data={[{ name: 'savings', value: this.state.savings }, { name: 'expenses', value: this.state.expenses }]} fill="#000"></Pie>
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