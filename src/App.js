import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';
import { fetchBooks, fetchMagazines, fetchAuthors} from './actions';
import Main from './components/Main';

const store = ConfigureStore();
store.dispatch(fetchBooks('/data/books.csv'));
store.dispatch(fetchMagazines('/data/magazines.csv'));
store.dispatch(fetchAuthors('/data/authors.csv'));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;