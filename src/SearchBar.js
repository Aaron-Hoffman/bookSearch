import { useState } from "react";

const SearchBar = ({setBooks}) => {

    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = new URL('http://openlibrary.org/search.json');
        url.search = new URLSearchParams({
            q: query
        });

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                setBooks(jsonResponse.docs.filter(book => book.author_name !== undefined && book.publish_date !== undefined))
            })

    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="title">Search by title</label>
            <input type="text" name="title" id="title" placeholder="Search by title" value={query} onChange={(event) => setQuery(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;