import Book from "./Book";

const Results = ({books}) => {
    return (
        books.map(book => <Book book={book} key={book.key}/>)
    )
}

export default Results;