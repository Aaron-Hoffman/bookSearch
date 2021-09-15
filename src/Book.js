import formatDate from "./formatDate";

const Book = (({book}) => {

    // const isbn = book.text.filter((string) => {
    //     return string.length === 13 && Number(string);
    // })

    // console.log(isbn)

    // const olid = book.key.split('/')[2];
    const olid = book.edition_key[0];

    const date = formatDate(book.publish_date[0]);

    return (
        <li className="book">
            <div className="imgContainer">
                <img src={`https://covers.openlibrary.org/b/olid/${olid}-M.jpg`} alt={`Cover art for ${book.title}`} />
                <p className="noCover">No Cover Art Available</p>
            </div>
            <h2>{book.title}</h2>
            <h3>by {book.author_name[0]}</h3>
            <p>{date}</p>
        </li>
    )
})

export default Book;