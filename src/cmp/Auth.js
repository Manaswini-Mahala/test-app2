import React, {Component} from 'react';
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
            errorMsg:''
            
        }
    }

    login() {
        //console.warn("state", this.state)
        let toSend={};
        toSend.email=document.getElementById("email").value;
        toSend.password=document.getElementById("password").value;
        fetch('http://localhost:8080/api1/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.toSend)
        }).then((result) => result.text())

        // .then(data=>console.log(data)

        .then(data=>{
            if(data=="valid login attempt"){
                this.props.history.push('/home')
        }
        else{
            throw new Error("data invalid");

        }
    })

        // if(data=="valid login attemp"){
        //     this.props.history.push('/home')
        // }
        
        // .catch((err)=>{
        //     this.setState({
        //         errorMsg:'Invalid Credentials'
        //     })
        // })
        //         //alert("login called")
    }

    register() {
        console.warn("state", this.state)
        fetch('http://localhost:8080/api1/registration', {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);

            })

        })
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
                            <input type="text" id='name'
                                onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
                            <label>Password</label><br />
                            <input type="text" id='password'
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />


                            <button onClick={() => this.login()}>Login</button>
                            <div style={{color:'red'}}>{this.state.errorMsg}</div>

                            <br />
                            <br />

                            <label>Not yet registered? Register Now!</label> <br />

                            <button onClick={() => this.setState({ isRegister: true })}>Register</button>


                        </div>
                        :
                        <div>

                            <label>Name</label><br />
                            <input type="text" placeholder='John Doe'
                                onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />


                            <label>Email</label><br />
                            <input type="text" placeholder='johndoe@test.com'
                                onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />


                            <label>Password</label><br />
                            <input type="text"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />


                            <label>Confirm Password</label><br />
                            <input type="text"
                                onChange={(e) => { this.setState({ cpassword: e.target.value }) }} /><br /><br />

                                


                            <Link to='/home'><button onClick={() => this.register()}>Register</button></Link> <br /><br />


                            <label>Already registered? Login here!</label> <br />

                            <button onClick={() => this.setState({ isRegister: false })}>Login</button>



                        </div>

                }

            </div>
        );
    }
}

export default withRouter(Auth);