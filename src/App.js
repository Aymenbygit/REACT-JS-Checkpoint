import "./App.css";
import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div  class="container">
    <Nav class="navbar navbar-dark bg-dark">
      <Nav.Item >
        <Nav.Link eventKey="link-1"> <i class="fas fa-home"></i> Home </Nav.Link>
      </Nav.Item>
      <Nav.Item   >
        <Nav.Link eventKey="link-2"> <i class="fas fa-address-card"></i> Contact us </Nav.Link>
      </Nav.Item>
    </Nav>
    <br />
    
    <h5 class="title"> Please fill the form below to submit me an e-mail with your questions! </h5>
    <br />
    
    <Form >
            <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label class="FormLabel ">First Name :</Form.Label>
                    <Form.Control className="col-8" placeholder="Enter Your First Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label class="FormLabel">Last Name :</Form.Label>
                    <Form.Control className="col-8" placeholder="Enter Your Last Name" />
                  </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label class="FormLabel">Address :</Form.Label>
                  <Form.Control className="col-8" placeholder="Enter Your Adress" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label class="FormLabel">Email :</Form.Label>
                    <Form.Control className="col-8" type="email" placeholder="Enter email" />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label class="FormLabel">Your Message :</Form.Label>
              <Form.Control className="col-10" as="textarea" rows={3} placeholder="Enter your message here"/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>

        </Form>  
    <br />
    <br />
    <br />
    <div class="ContactMe">
          <p>
          <i class="fas fa-house-user"></i> <i>Messadine, Sousse, Tunisie</i
            ><br />
            <i class="fas fa-phone"></i> <i>(+216) 26 398 196</i><br />
            <i class="fas fa-envelope-square"></i> <a href="mailto:aymenby30@gmail.com"
              ><i>aymenby30@gmail.com</i></a>
            <br />
            
            
            <a href="https://www.facebook.com/aymen.etoilist" target="_blank"
              ><img src="https://img.icons8.com/color/48/000000/facebook.png"
            /></a>
            <a href="https://github.com/Aymenbygit"
              target="_blank"
              ><img src="https://img.icons8.com/fluent/48/000000/github.png"
            /></a>
          </p>
    </div> 
    <footer>
      <p id="footerContent"> <b>All rights reserved ©.</b></p>
    </footer>  
</div>
  );
}

export default App;
