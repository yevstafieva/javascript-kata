import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PublicationsList = ({publications, authors}) => {
    const lookUpAuthors = (publication) => {
       return (publication.authors.split(",").map(authorEmail => 
         authors?.authors[authorEmail] ? `${authors.authors[authorEmail].firstname} ${authors.authors[authorEmail].lastname}` : authorEmail
       ).join(', '))
    }
    if (publications?.all && authors?.authors){
        return (<ListGroup>
            {publications.all.map(publication => <ListGroupItem key={publication.isbn}>{publication.title} <br /> by <b>{lookUpAuthors(publication)}</b> <br /> (ISBN: {publication.isbn}) </ListGroupItem> )}
        </ListGroup>)
    } else {
        return <p>There were no publications loaded</p>
    }
    
}

const mapStateToProps = state => ({
    publications: state.publications,
    authors: state.authors
  })
  
  
  export default connect(mapStateToProps)(PublicationsList)