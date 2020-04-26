import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Input,
    Label,
    Button,
    Form,
    FormGroup
} from 'reactstrap';
import { filterISBN, filterAuthor } from '../actions'; 

class Search extends Component {

    onFilterISBN = (e) => {
        const value=e.target.value;
        this.props.onFilterISBN(value);
    }

    onFilterAuthor = (e) => {
        const value=e.target.value;
        this.props.onFilterAuthor(value);
    }

    render () {
        return (
            <Form>
                <FormGroup>
                    <Label for="filterISBN">Filter ISBN</Label>
                    <Input id="filterISBN" placeholder="enter ISBN" onInput={this.onFilterISBN}/> 
                </FormGroup>
                <FormGroup>
                    <Label for="filterAuthors">Filter Authors</Label>
                    <Input id="filterAuthor" placeholder="enter author name" onInput={this.onFilterAuthor}/> 
                </FormGroup>
            </Form>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterISBN: (filter) => dispatch(filterISBN(filter)),
        onFilterAuthor: (filter) => dispatch(filterAuthor(filter))
    }
}

export default connect(null, mapDispatchToProps)(Search);