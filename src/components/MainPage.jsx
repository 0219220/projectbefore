import React, { Component } from 'react';
import { Navbar, Nav, Container, Col, Row }from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

class MainPage extends React.Component {
    render() { 
        return <div>
        

<Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto"><Link to='/Flight'>  <button type="submit" className="btn btn-danger">Search for Flights!</button></Link>
</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container>

        </div>;
 }
}
 
export default MainPage;
