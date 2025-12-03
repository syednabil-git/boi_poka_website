import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //     setAllBooks(data)
    //     })
    // },[])
    return(
        <div>
            <h1>
                hellooe ami bokks
            </h1>
            <Suspense fallback={<span>loading.....</span>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                 {
                data.map((singleBook)=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
            }
            </div>
           
            </Suspense>
        </div>
    );
};
export default Books;