import Book from "./Book";
// import { useState, useEffect } from "react";

const Results = ({books}) => {
    
    // const [results, setResults] = useState([]);

    // useEffect(() => {
    //     setResults(books);
    // }, [books] )

    return (
        <ul className="results wrapper">
            {books.map(book => <Book book={book} key={book.key}/>)}
        </ul>
    )
}

export default Results;