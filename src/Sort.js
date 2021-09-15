import { useState, useEffect } from "react";
import formatDate from "./formatDate";


const Sort = ({setBooks, books}) => {

    const [sortOption, setSortOption] = useState('');

    const sortBooks = () => {

        if (sortOption === 'A-Z') {
            const sortedBooks = [...books].sort((lastBook, nextBook) => lastBook.title > nextBook.title ? 1 : -1);
            setBooks(sortedBooks);
        } else if (sortOption === 'Z-A') {
                const sortedBooks = [...books].sort((lastBook, nextBook) => lastBook.title > nextBook.title ? -1 : 1);
                setBooks(sortedBooks);
        } else if (sortOption === 'Newest first') {
                const sortedBooks = [...books].sort((lastBook, nextBook) => formatDate(lastBook.publish_date[0]) > formatDate(nextBook.publish_date[0]) ? -1 : 1);
                setBooks(sortedBooks);
        } else if (sortOption === 'Oldest first') {
                const sortedBooks = [...books].sort((lastBook, nextBook) => formatDate(lastBook.publish_date[0]) > formatDate(nextBook.publish_date[0]) ? 1 : -1);
                setBooks(sortedBooks);
        }  else {
                return;
        }
        setSortOption('');
    }
    

    useEffect(sortBooks, [sortOption, setBooks, books])

    return (
        <form className="wrapper sortForm">
            <label htmlFor='sort' className="sr-only">Sort by:</label>
            <select name='sort' id='sort' onChange={(event) => setSortOption(event.target.value)} tabIndex='0'>
                <option value="">Sort by:</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Newest first">Newest first</option>
                <option value="Oldest first">Oldest first</option>
            </select>
        </form>
    )
}

export default Sort;