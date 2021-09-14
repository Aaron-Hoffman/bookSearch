import { useState, useEffect } from "react";
import formatDate from "./formatDate";

const SortOption = (({name, text, options, setBooks, books}) => {

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
                const sortedBooks = [...books];
                setBooks(sortedBooks);
        }
    }
    

    useEffect(sortBooks, [sortOption])


    return (
        <>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={(event) => setSortOption(event.target.value)} tabIndex='0'>
                {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
            </select>
        </>
    )
})

export default SortOption;