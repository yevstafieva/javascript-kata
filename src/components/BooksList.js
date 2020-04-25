import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

const BooksList = ({books, authors}) => {
    const lookUpAurhors = (book) => {
       return (book.authors.split(",").map(author => `${authors.authors[author].firstname} ${authors.authors[author].lastname}`).join(', '))
    }
    if (books?.books && authors?.authors ){
        return (<ListGroup>
            {books.books.map(book => <ListGroupItem key={book.isbn}>{book.title} <br /> by <b>{lookUpAurhors(book)}</b> <br /> (ISBN: {book.isbn}) </ListGroupItem> )}
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