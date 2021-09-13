import Book from "./Book";

const Results = ({books}) => {
    return (
        books.map(book => <book book={book}/>)
    )
}

export default Results;