import { useState,useEffect } from "react";

const Book = (({book}) => {
    
    console.log(book)

    const isbn = book.text.filter((string) => {
        return string.length === 13 && Number(string);
    })

    console.log(isbn)
    

    return (
        <div className="book">
            <div className="imgContainer">
                <img src={`http://covers.openlibrary.org/b/isbn/${isbn[0]}-S.jpg`} alt="" />
            </div>
            <h2>{book.title}</h2>
            <h3>{book.author_name[0]}</h3>
            <p>{book.publish_date[0]}</p>
        </div>
    )
})

export default Book;