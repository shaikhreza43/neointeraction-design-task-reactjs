import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{ id: 1, name: 'Shaikh Ahmed Reza', email: 'shaikhreza43@gmail.com' },
            { id: 2, name: 'Kshitij Joshi', email: 'kshitij@gmail.com' },
            { id: 3, name: 'Rudresh Patel', email: 'rudresh@gmail.com' }
            ]
        }
    }

    deleteRow=(index)=>{
        var newArray = [...this.state.data];
        newArray.splice(index,1);
        this.setState({data:newArray});
    }

    addRow=()=>{
       var  rows = this.state.data;
       rows.push({id:5,name:"dummy name",email:"dummy_email@email.com"});
       this.setState({data:rows});
    }

    renderTd = ()=>{
        let tdData = this.state.data.map((item,index)=>{
            return(
                <>
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><Link to="#" onClick={()=>this.deleteRow(index)}>Delete</Link></td>
                </tr>
                </>
            )
        });

        return tdData;
    }

    render() {
        return (
            <Container fluid>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTd()}
                        <Link to="#" onClick={this.addRow}>Add Row</Link>
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default TableComponent;