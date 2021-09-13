import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header'
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import Results from './Results';

function App() {

  const [books, setBooks] = useState([]);
  const [cover, setCover] = useState('');
    
    const getCover = () => {
        fetch('http://openlibrary.org/api/volumes/brief/isbn/9781442249073.json')
            .then((response) => {
                console.log(response);
            })
    }

    useEffect(getCover, [])

  return (
    <div className="App">
      <Header />
      <SearchBar setBooks={setBooks}/>
      <SortBar />
      <Results books={books} />
    </div>
  );
}

export default App;
