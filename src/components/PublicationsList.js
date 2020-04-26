import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PublicationsList = ({publications, authors, filterByISBN, filterByAuthors}) => {

    const lookUpAuthors = (publication) => {
       return (publication.authors.split(",").map(authorEmail => 
         authors?.authors[authorEmail] ? `${authors.authors[authorEmail].firstname} ${authors.authors[authorEmail].lastname}` : authorEmail
       ).join(', '))
    }
    const printList = (publications) => {
         return (publications.map(publication => <ListGroupItem key={publication.isbn}>{publication.title} <br /> by <b>{lookUpAuthors(publication)}</b> <br /> (ISBN: {publication.isbn}) </ListGroupItem> ))
    }

    if (publications?.all && authors?.authors){
        let list=null;
        if (filterByISBN) list=printList(publications.all.filter(e => e.isbn===filterByISBN))
        else if (filterByAuthors) list = null
        else list=printList(publications.all)
        return <ListGroup>{list}</ListGroup>
    } else {
        return <p>There were no publications loaded</p>
    }
    
}

const mapStateToProps = state => ({
    publications: state.publications,
    authors: state.authors,
    filterByISBN: state.filter.filterByISBN,
    filterByAuthors: state.filter.filterByAuthors
  })
  
  
  export default connect(mapStateToProps)(PublicationsList)