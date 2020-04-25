import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

const MagazinesList = ({magazines, authors}) => {
    const lookUpAurhors = (book) => {
       return (book.authors.split(",").map(authorEmail => authors.authors[authorEmail] ? `${authors.authors[authorEmail].firstname} ${authors.authors[authorEmail].lastname}` : authorEmail).join(', '))
    }
    if (magazines?.magazines && authors?.authors ){
        return (<ListGroup>
            {magazines.magazines.map(magazine => <ListGroupItem key={magazine.isbn}>{magazine.title} <br/> by <b>{lookUpAurhors(book)}</b> <br/> (ISBN: {book.isbn}) </ListGroupItem> )}
        </ListGroup>)
    } else {
        return <p>There were no books loaded</p>
    }
    
}

const mapStateToProps = state => ({
    magazines: state.magazines,
    authors: state.authors
  })
  
  
  export default connect(mapStateToProps)(BooksList)