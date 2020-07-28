import React, { Component, Fragment } from 'react';
import './Register.css';
import { FormGroup, Input, Form, Label, Button, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RegisterFormDiv = styled.div`
border:1px solid #000000;
padding:20px 15px 203px 15px;
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

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
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
                            <RegisterFormDiv>
                                <Form onSubmit={this.handleSubmit}>

                                <Col lg="12">
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input type="text" name="username" placeholder="Enter Username..."></Input>
                                        </FormGroup>
                                    </Col>

                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input type="text" name="email" placeholder="Enter Email..."></Input>
                                        </FormGroup>
                                    </Col>


                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="password" name="password" placeholder="Enter Password..."></Input>
                                        </FormGroup>
                                    </Col>


                                    <Col lg="12">
                                        <Button type="submit" color="secondary">Register</Button>
                                        <Label className="ml-2">
                                            Already have an account?
                                                 {"  "}
                                            <Link to="/login">Login</Link>
                                        </Label>
                                    </Col>

                                </Form>

                                <ul className="mt-5">
                                    <li>Valid Email Should be entered in the email input</li>
                                    <li>Password should be minimum 8 characters long and it should be the combination of both numbers and alphabets</li>
                                </ul>

                            </RegisterFormDiv>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Register;