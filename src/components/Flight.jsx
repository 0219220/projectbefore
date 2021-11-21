import React, { Component, useState } from 'react';
import { Navbar, Nav, Container }from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import axios from 'axios';
//const baseURL='https://reqres.in';
/*
*/


class Flight extends React.Component {
    state={
        loading: true,
        message:" "
    }
    
    async componentDidMount(){

        axios(
            '/signin1'



            ).then((response)=>{
            console.log(response.data.message);
            this.setState({message:response.data.message,
                loading:false
            
            });
    
            });
        
    }
    
    render() { 
        return <div>


FLIGHTS 
{ this.state.message }



        </div>;
 }
}
 
export default Flight;




