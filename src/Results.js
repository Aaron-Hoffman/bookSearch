import Book from "./Book";

const Results = ({books}) => {

    return (
        <ul className="results wrapper">
            {books.map(book => <Book book={book} key={book.key}/>)}
        </ul>
    )
}

export default Results;