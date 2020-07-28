import React, { Component, Fragment } from 'react';
import './Login.css';
import { FormGroup, Input, Form, Label, Button, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginFormDiv = styled.div`
border:1px solid #000000;
padding:20px 15px 289px 15px;
box-shadow:1px 2px #000000;
background-color:lightgray;
overflow:hidden;
 `

const RandomImageDiv = styled.div`
background-image:url(https://source.unsplash.com/random);
background-position:center;
background-size:cover;
background-repeat: no-repeat;
height:100%;
overflow:hidden;
margin-right:-30px;
`

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {
            username: this.state.username,
            password: this.state.password
        }

        fetch('https://b905e116-1f67-4330-bbbc-5f83bd1bd458.mock.pstmn.io/login',
         {method: 'POST', body: JSON.stringify(requestBody), headers: { 'Content-Type': 'application/json' }})
         .then(res=>res.json())
         .then(data=>{
             localStorage.setItem('jwt',data.jwt);
             localStorage.setItem('username',requestBody.username);
             window.location="/";
         })
    }

    render() {
        return (
            <Fragment>
                <Container fluid>
                    <Row>
                        <Col lg="7" md="8">
                            <RandomImageDiv></RandomImageDiv>
                        </Col>
                        <Col lg="5" md="5">
                            <LoginFormDiv>
                                <Form onSubmit={this.handleSubmit}>

                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input type="text"
                                                name="username"
                                                placeholder="Enter Username..."
                                                onChange={this.handleChange}></Input>
                                        </FormGroup>
                                    </Col>


                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="password" name="password"
                                                placeholder="Enter Password..."
                                                onChange={this.handleChange}></Input>
                                        </FormGroup>
                                    </Col>


                                    <Col lg="12">
                                        <Button type="submit" color="secondary">Login</Button>
                                        <Label className="ml-2">
                                            Don't have an account?
                                                 {"  "}
                                            <Link to="/register">Register</Link>
                                        </Label>
                                    </Col>

                                </Form>

                                <ul className="mt-5">
                                    <li>Valid Email Should be entered in the email input</li>
                                    <li>Password should be minimum 8 characters long and it should be the combination of both numbers and alphabets</li>
                                </ul>

                            </LoginFormDiv>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Login;