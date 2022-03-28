import React, { Component } from 'react';

class Savings extends Component {
    render() {
        return (
            <div className='app'>
                <label>Account Balance</label><br />
                <input type="text" id='cbalance'
                    onChange={(e) => { this.setState({ cbalance: e.target.value }) }} /><br /><br />

                <label>Month</label><br />
                <input type="text" id='month'
                    onChange={(e) => { this.setState({ month: e.target.value }) }} /><br /><br />

            </div>
        );
    }
}

export default Savings;