import React, { Component } from 'react';
import { Form, FormGroup, Input, Container, Label, Button } from 'reactstrap';
import DatePicker from 'react-date-picker';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const obj = {
    textbox1: '',
    textbox2: '',
    date: new Date(),
    selectedOption: '',
    radio: '',
    checkbox: ''
}

class DummyFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainObj: obj
        }
    }

    handleChange = (event) => {
        this.setState({ mainObj: Object.assign({ ...this.state.mainObj }, { [event.target.name]: event.target.value }) });
    }

    handleDateChange = (date) => {
        this.setState({ mainObj: Object.assign({ ...this.state.mainObj }, { date }) });
    }

    handleDropdown = (e) => {
        this.setState({ mainObj: Object.assign({ ...this.state.mainObj }, { selectedOption: e }) });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        alert(this.state.mainObj.textbox1 + "\n" + this.state.mainObj.textbox2 +
            "\n" + this.state.mainObj.date + "\n" + this.state.mainObj.selectedOption.value + "\n" + this.state.mainObj.radio
            + "\n" + this.state.mainObj.checkbox);
    }
    render() {
        return (
            <Container>
                <h3 className="text-center">Dummy Form</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="text1">Text Box1</Label>
                        <Input type="text" name="textbox1" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="text2">Text Box2</Label>
                        <Input type="text" name="textbox2" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="date-picker">Date Picker</Label>
                        <br></br>
                        <DatePicker onChange={(date) => this.handleDateChange(date)} value={this.state.mainObj.date} name="date" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dropdown">Dropdown</Label>
                        <Select
                            options={options}
                            value={this.state.mainObj.selectedOption}
                            onChange={(e) => this.handleDropdown(e)}
                            name="selectedOption"
                        >
                        </Select>
                    </FormGroup>

                    <FormGroup>
                        <Label for="radio">Radio</Label><br></br>
                        <Input type="radio" name="radio" onChange={this.handleChange} value="Some Radio Button value" style={{ marginLeft: '20px' }}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="checkbox">Checkbox</Label><br></br>
                        <Input type="checkbox" name="checkbox" onChange={this.handleChange} value="Some Checkbox value" style={{ marginLeft: '20px' }}></Input>
                    </FormGroup>

                    <Button className="mt-2" color="secondary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default DummyFormComponent;