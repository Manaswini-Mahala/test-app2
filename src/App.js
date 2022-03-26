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
import AccountDeactivated from './cmp/AccountDeactivated';
import AccountDeleted from './cmp/AccountDeleted';
import ChangeName from './cmp/ChangeName';
import ChangePassword from './cmp/ChangePassword';
import ChangeEmail from './cmp/ChangeEmail';
import NameChanged from './cmp/NameChanged';
import PasswordChanged from './cmp/PasswordChanged';
import EmailChanged from './cmp/EmailChanged';
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
            <Route exact path="/accountdeactivated"><AccountDeactivated /> </Route>
            <Route exact path="/accountdeleted"><AccountDeleted /> </Route>
            <Route exact path="/changename"><ChangeName/> </Route>
            <Route exact path="/changepassword"><ChangePassword /> </Route>
            <Route exact path="/changeemail"><ChangeEmail /> </Route>
            <Route exact path="/namechanged"><NameChanged /> </Route>
            <Route exact path="/passwordchanged"><PasswordChanged /> </Route>
            <Route exact path="/emailchanged"><EmailChanged /> </Route>




            {/* <Route><Error />} > */}


          </Switch>

        </Router>

      </div>


    </div>
  );
}

export default App;
