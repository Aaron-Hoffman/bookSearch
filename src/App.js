import './App.css';
import { useState } from 'react';
import Header from './Header'
import UserControls from './UserControls';
import Results from './Results';

function App() {

  const [books, setBooks] = useState([]);

  // const [cover, setCover] = useState('');

  // const url = new URL('http://proxy.hackeryou.com');

  // url.search = new URLSearchParams({
  //     reqUrl: 'http://openlibrary.org/api/volumes/brief/isbn/9781442249073.json'
  // })
    
  //   const getCover = () => {
  //       fetch(url)
  //           .then((response) => {
  //               return response.json();
  //           })
  //           .then((jsonResponse) => {
  //             console.log(jsonResponse);
  //           })
  //   }

  //   useEffect(getCover, [])


  return (
    <div className="App">
      <Header />
      <UserControls setBooks={setBooks} books={books}/>
      <Results books={books} />   
    </div>
  );
}

export default App;
