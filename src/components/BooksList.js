import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

const BooksList = ({books}) => {
    
        if (books?.books?.data){
            return (<ListGroup>
                {books.books.data.map(book => <ListGroupItem key={book.isbn}>{book.title} ({book.isbn}) </ListGroupItem> )}
            </ListGroup>)
        } else {
            return <p>There were no books loaded</p>
        }
    
}

const mapStateToProps = state => ({
    books: state.books
  })
  
  
  export default connect(mapStateToProps)(BooksList)