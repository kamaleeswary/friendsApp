import React, { Component} from 'react';
import './index.css'
import axios from 'axios';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom'

class App extends Component {
componentDidMount()
{
  axios('http://localhost:8081/rest/neo4j/user/allUser')
  .then(data => 
{
   
     this.setState({ data })

console.log(data);
})
}
  render() {
    return (
      <Container className="App">
        <h2 style={{color:'black'}} id="welcome">Welcome To FriendsBook !</h2>
        <div id="main">
        <Form className="form">
          <Col>
            <FormGroup id="formGroup">
           <Label id="iconLabel"> <i className="fa fa-envelope" aria-hidden="true"></i></Label>
              <Label id="emailLabel">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                
              />
            </FormGroup>
          </Col>
          {/* <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col> */}
          <Link to="/next-page" ><Button className="btn btn-primary" id="btn">Submit</Button></Link>
        </Form></div>
      </Container>
    );
 
  }
}

export default App;
