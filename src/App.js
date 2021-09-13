import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Header'
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import Results from './Results';

function App() {

  const [books, setBooks] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <SortBar />
      <Results books={books} />
    </div>
  );
}

export default App;
