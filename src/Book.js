import { useState,useEffect } from "react";

const Book = (({book}) => {
    
    console.log(book)

    // const isbn = book.text.filter((string) => {
    //     return string.length === 13 && Number(string);
    // })

    // console.log(isbn)

    // const olid = book.key.split('/')[2];
    const olid = book.edition_key[0];
    console.log(olid)
    

    return (
        <li className="book">
            <div className="imgContainer">
                <img src={`http://covers.openlibrary.org/b/olid/${olid}-S.jpg`} alt="" />
            </div>
            <h2>{book.title}</h2>
            <h3>{book.author_name[0]}</h3>
            <p>{book.publish_date[0]}</p>
        </li>
    )
})

export default Book;