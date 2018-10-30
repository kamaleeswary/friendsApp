import React, { Component} from 'react';
import './index.css'
import axios from 'axios';
// import Map from './Map';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nextpage from './Nextpage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={value:'',userData:[],isUserExists:false};
    // this.rowCallback = this.rowCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

handleSubmit(event) {
  event.preventDefault();
  console.log(this.state.value);
  let user = {
    'email': this.state.value
  };

  axios.post(`http://localhost:8081/rest/neo4j/user/isUserExists`,user)
  .then(response => {
    this.setState((state, props) => ({userData: response.data}));
    console.log("this ",this.state.userData.email);
    console.log("res ",user)
    if(this.state.userData.email===user.email){
      this.setState({isUserExists:true})
      this.props.history.push('/next-page')
      console.log("h sy ad"+this.state.isUserExists)
    }
    else{
    this.setState({isUserExists:false});
    console.log("else")
    }

  })}


  render() {
  // <Nextpage org={this.state.userData}/>
    return (
      <Container className="App">
        <h2 style={{color:'black'}} id="welcome">Welcome To FriendsBook !</h2>
        <div id="main">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup id="formGroup">
           <Label id="iconLabel"> <i className="fa fa-envelope" aria-hidden="true"></i></Label>
              <Label id="emailLabel">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        <Button className="btn btn-primary"  id="btn">Submit</Button>
        </Form></div>
      </Container>
      
    );
 
  }
}

export default App;
