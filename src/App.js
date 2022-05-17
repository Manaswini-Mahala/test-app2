import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home';
import About from './cmp/About';
import Protected from './cmp/Protected';
import Auth from './cmp/Auth';
import Nav from './cmp/Nav';
import Box from './cmp/Box';
import Savings from './cmp/Savings';
import Expenses from './cmp/Expenses';
import Investments from './cmp/Investments';
import Account from './cmp/Account';
import ChangeAccountDetails from './cmp/ChangeAccountDetails';
import DeactivateAccount from './cmp/DeactivateAccount';
import DeleteAccount from './cmp/DeleteAccount';
import ChangeName from './cmp/ChangeName';
import ChangePassword from './cmp/ChangePassword';
import ChangeEmail from './cmp/ChangeEmail';
import MutualFunds from './cmp/MutualFunds';
import ProvidentFunds from './cmp/ProvidentFunds';
import Resources from './cmp/Resources';
import Error from './Error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";





function App() {
  return (
    <div className="App">

      <div className='a1'>

        <Router>

          <Nav />

          <Switch>

            <Route exact path="/" >
              <Auth />
            </Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/about" ><About /></Route>
            
            <Route exact path="/savings"> <Savings /> </Route>
            <Route exact path="/expenses"> <Expenses /> </Route>
            <Route exact path="/investments"><Investments /> </Route>
            <Route exact path="/account"><Account /> </Route>
            <Route exact path="/changeaccountdetails"><ChangeAccountDetails /> </Route>
            <Route exact path="/deactivateaccount"><DeactivateAccount /> </Route>
            <Route exact path="/deleteaccount"><DeleteAccount /> </Route>
            <Route exact path="/changename"><ChangeName/> </Route>
            <Route exact path="/changepassword"><ChangePassword /> </Route>
            <Route exact path="/changeemail"><ChangeEmail /> </Route>
            <Route exact path="/mutualfunds"><MutualFunds /> </Route>
            <Route exact path="/providentfunds"><ProvidentFunds /> </Route>
            <Route exact path="/resources"><Resources /> </Route>
            




            {/* <Route><Error />} > */}


          </Switch>

        </Router>

      </div>


    </div>
  );
}

export default App;
