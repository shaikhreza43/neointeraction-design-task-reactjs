import React, { Component, Fragment } from 'react';
import './Home.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import TableComponent from '../Table/TableComponent';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Anonymous',
            isOpen:false
        }
    }

    toggleNavbar = ()=>{
        if(this.state.isOpen===false)
        this.setState({isOpen:true});
        else if(this.state.isOpen===true)
        this.setState({isOpen:false});
    }

    render() {
        return (
            <Fragment>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/" className="home-link">{this.state.name}</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/login" className="home-link">Logout</Link>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Navbar>

                <TableComponent/>
            </Fragment>
        )
    }
}

export default Home;