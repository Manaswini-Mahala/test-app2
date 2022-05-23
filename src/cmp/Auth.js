import React, { Component } from 'react';
import Cookies from 'js-cookie';
import {
    Redirect,
    Link,
    withRouter
} from "react-router-dom";

//export const Component = withRouter(({ history, location }) =>{

//})

class Auth extends Component {


    constructor() {

        super()
        this.state = {
            isRegister: false,
            errorMsg: ''

        }
    }

    login() {

        const e = document.getElementById("email").value;
        const p = document.getElementById("password").value;
        Cookies.set("email", e)
        Cookies.set("password", p)


        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email: e, password: p })

        };

        fetch('http://localhost:8080/api1/login', requestOptions)
            .then(response => response.text())
            //.then(data => this.setState({ postId: data.id }));
            //.then(data=>console.log(data));
            .then(data => {
                if (data == "Valid login attempt") {
                    this.props.history.push('/home')
                    // Cookies.set('email', e)
                    // Cookies.set('password', p)
                }
                else {
                    //throw new Error("Invalid login attempt");
                    document.getElementById("error").innerHTML = data;

                }
            });

        //         //alert("login called")
    }

    register() {
        // console.warn("state", this.state)
        const n = document.getElementById("name").value;
        const e = document.getElementById("email").value;
        const p = document.getElementById("password").value;
        const cp = document.getElementById("cpassword").value;
        const a = document.getElementById("accountno").value;
        const i = document.getElementById("ifsc").value;
        const ab = document.getElementById("cbalance").value;
        const m = document.getElementById("month").value;
        const y = document.getElementById("year").value;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ name: n, email: e, password: p, cpassword: cp, accountno: a, ifsccode: i, cbalance: ab, month: m, year: y })

        };

        fetch('http://localhost:8080/api1/registration', requestOptions)
            .then(response => response.text())
            .then(data => {
                if (data == "New user registered successfully") {
                    this.props.history.push('/home')
                }
                else {
                    document.getElementById("error2").innerHTML = data;

                }
            });

        //         //alert("registered")
    }

    render() {

        var auth = JSON.parse(localStorage.getItem('auth'))

        return (
            <div className='a2'>

                {/* {

                    auth ? <Redirect to="home" ></Redirect> : null

                } */}

                {
                    !this.state.isRegister ?
                        <div>
                            <label>Email</label><br />
                            <input type="text" id='email'
                                onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
                            <label>Password</label><br />
                            <input type="text" id='password'
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />


                            <button onClick={() => this.login()}>Login</button>
                            {/* <div style={{ color: 'red' }}>{this.state.errorMsg}</div> */}
                            <div style={{ color: 'red' }}><p id="error"></p></div>
                            <br />
                            <br />

                            <label>Not yet registered? Register Now!</label> <br />

                            <button onClick={() => this.setState({ isRegister: true })}>Register</button>


                        </div>
                        :
                        <div>

                            <label>Name</label><br />
                            <input type="text" placeholder='John Doe' id='name'
                                onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />


                            <label>Email</label><br />
                            <input type="text" placeholder='johndoe@test.com' id='email'
                                onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />


                            <label>Password</label><br />
                            <input type="text" id='password'
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />


                            <label>Confirm Password</label><br />
                            <input type="text" id='cpassword'
                                onChange={(e) => { this.setState({ cpassword: e.target.value }) }} /><br /><br />

                            <label>Add Account Details</label><br /><br />

                            <label>Account Number</label><br />
                            <input type="text" id='accountno'
                                onChange={(e) => { this.setState({ accountno: e.target.value }) }} /><br /><br />

                            <label>IFSC Code</label><br />
                            <input type="text" id='ifsc'
                                onChange={(e) => { this.setState({ ifsc: e.target.value }) }} /><br /><br />

                            <label>Account Balance</label><br />
                            <input type="text" id='cbalance'
                                onChange={(e) => { this.setState({ cbalance: e.target.value }) }} /><br /><br />

                            <label>Month</label><br />
                            <input type="text" id='month'
                                onChange={(e) => { this.setState({ month: e.target.value }) }} /><br /><br />

                            <label>Year</label><br />
                            <input type="text" id='year'
                                onChange={(e) => { this.setState({ year: e.target.value }) }} /><br /><br />






                            <button onClick={() => this.register()}>Register</button> <br /><br />
                            <div style={{ color: 'red' }}><p id="error2"></p></div>
                            <br />
                            <br />

                            <label>Already registered? Login here!</label> <br />

                            <button onClick={() => this.setState({ isRegister: false })}>Login</button>



                        </div>

                }

            </div>
        );
    }
}

export default withRouter(Auth);