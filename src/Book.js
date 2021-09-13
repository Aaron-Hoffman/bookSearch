import { useState,useEffect } from "react";

const Book = (({book}) => {
    
    // const [cover, setCover] = useState('');
    
    // const getCover = () => {
    //     fetch('http://openlibrary.org/api/volumes/brief/isbn/9781442249073.json')
    //         .then((response) => {
    //             console.log(response);
    //         })
    // }

    // useEffect(getCover, [])
    

    return (
        <div className="book" id={book.key}>
            {/* <div className="imgContainer">
                <img src={cover} alt="" />
            </div> */}
            <h2>{book.title}</h2>
            <h3>{book.author_name[0]}</h3>
            <p>{book.publish_date[0]}</p>
        </div>
    )
})

export default Book;