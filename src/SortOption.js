import { useState, useEffect } from "react";

const SortOption = (({name, text, options, setBooks, books}) => {

    const [sortOption, setSortOption] = useState('');

    const sortBooks = () => {
        console.log(sortOption)
        // if (sortOption === '') {
        //     return;
        // }
        const sortedBooks = [...books].sort((lastBook, nextBook) => lastBook.title > nextBook.title ? 1 : -1);
        setBooks(sortedBooks)
        // console.log({sortedBooks})
        // console.log({books})
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