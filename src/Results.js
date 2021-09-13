import Book from "./Book";

const Results = ({books}) => {
    return (
        books.map(book => <Book book={book}/>)
    )
}

export default Results;