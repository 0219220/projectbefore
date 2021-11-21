import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { Navbar, Nav, Container }from 'react-bootstrap'


import {
    Link,
} from 'react-router-dom';

function SignIn(){
    



        return(
        <div>

<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >GDL2Europe</Navbar.Brand>

    </Container>
  </Navbar>
  <br />
</>



                    <form >
                <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"></input>
                </div>
               
          <Link to='/'>  <button type="submit" className="btn btn-danger">Sign In</button></Link>
                    </form>
        </div>
    
        )
}
 
export default SignIn;
/* 

function SignIn(){
    return(
        <h1>wefjhwbe page</h1>
    );
}

export default SignIn;




*/