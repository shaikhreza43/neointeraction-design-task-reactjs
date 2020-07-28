import React, { Component, Fragment } from 'react';
import './Login.css';
import { FormGroup, Input, Form, Label, Button, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginFormDiv = styled.div`
border:1px solid #000000;
padding:20px 15px 350px 15px;
border-radius:10px;
position:fixed;
margin-left:1000px;
overflow-x:hidden;
box-shadow:1px 2px #000000;
background-color:lightgray;
 `

const RandomImageDiv = styled.div`
background-image:url(https://source.unsplash.com/random);
background-position:center;
background-size:cover;
background-repeat: no-repeat;
 `

class Login extends Component {

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

                <RandomImageDiv>
                    
                </RandomImageDiv>
                {/* ------------------------------------------------------------------------------ */}
                <LoginFormDiv>

                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col lg="12">
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="text" name="email" placeholder="Enter Email..."></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" placeholder="Enter Password..."></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <Button type="submit" color="secondary">Login</Button>
                                <Label className="ml-2">
                                    Don't have an account?
                                    {"  "}
                                    <Link to="/register">Register</Link>
                                </Label>
                            </Col>
                        </Row>
                    </Form>

                    <ul className="mt-5">
                        <li>Valid Email Should be entered in the email input</li>
                        <li>Password should be minimum 8 characters long and it should be the combination of both numbers and alphabets</li>
                    </ul>


                </LoginFormDiv>

            </Fragment>
        )
    }
}

export default Login;