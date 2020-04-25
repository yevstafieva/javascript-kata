import React, { Component } from 'react';
import { 
    Container,
    } from 'reactstrap';

import BookList from './BooksList';

class Main extends Component {
    render () {
      return (
        <Container>
            <h1 className="text-center">Library</h1>
            <h2>Books</h2>
            <BookList />
        </Container>
      )
    }
  }
  export default Main;