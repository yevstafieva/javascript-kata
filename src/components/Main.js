import React, { Component } from 'react';
import { 
    Container
    } from 'reactstrap';

import PublicationsList from './PublicationsList';
import Search from './SearchComponent'

class Main extends Component {
    render () {
      return (
        <Container>
            <h1 className="text-center">Library</h1>
            <h2>Books</h2>
            <Search />
            <PublicationsList />
        </Container>
      )
    }
  }
  export default Main;