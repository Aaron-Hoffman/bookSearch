import { useState } from "react";

const Search = ({setBooks, setError}) => {

    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = new URL('https://openlibrary.org/search.json');
        url.search = new URLSearchParams({
            q: query
        });

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                if (jsonResponse.docs[0]) {
                    setBooks(jsonResponse.docs.filter(book => book.author_name !== undefined && book.publish_date !== undefined));
                    setError('');
                } else {
                    setError("Sorry, we couldn't find any books with that title")
                    setBooks([]);
                }
            })

    }

    return (
        <form action="#" onSubmit={handleSubmit} className="wrapper">
            <label htmlFor="title" className="sr-only">Search by title</label>
            <input type="text" name="title" id="title" placeholder="Search by title" value={query} onChange={(event) => setQuery(event.target.value)} tabIndex='0'/>
            <button type='submit' tabIndex='0'>Search</button>
        </form>
    )
}

export default Search;