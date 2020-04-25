import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

const BooksList = ({books}) => {
    
        if (books?.books){
            return (<ListGroup>
                {books.books.map(book => <ListGroupItem key={book.isbn}>{book.title} by <b>Author</b> (ISBN: {book.isbn}) </ListGroupItem> )}
            </ListGroup>)
        } else {
            return <p>There were no books loaded</p>
        }
    
}

const mapStateToProps = state => ({
    books: state.books,
    authors: state.authors
  })
  
  
  export default connect(mapStateToProps)(BooksList)