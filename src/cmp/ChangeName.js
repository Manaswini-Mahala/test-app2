import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    //Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

class ChangeName extends Component {

    name() {
        const c = document.getElementById("cname").value;
        const n = document.getElementById("nname").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ cname: c, nname: n })

        };

        fetch('http://localhost:8080/api1/changename', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                document.getElementById("output").innerHTML = data;
                if (data == "New name is the same as current name. No change made.") {  
                    document.getElementById("output").style.color = 'red';
                }
                else {
                    document.getElementById("output").style.color = 'green';

                }


            });
        //         //alert("Name Changed")
    }


    render() {
        return (
            <div className='a2'>

                <label>Current Name</label><br />
                <input type="text" id="cname"
                    onChange={(e) => { this.setState({ cname: e.target.value }) }} /><br /><br />

                <label>New Name</label><br />
                <input type="text" id="nname"
                    onChange={(e) => { this.setState({ nname: e.target.value }) }} /><br /><br />

                <button onClick={() => this.name()}>Change Name</button>
                <div><p id="output"></p></div>



            </div>
        );
    }
}

export default ChangeName;