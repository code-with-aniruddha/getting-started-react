import React from "react";

const BookList = ({books})=>{
    const getBookList = (categories)=>{
        return categories.map((category)=>{
            return category.books.map((book)=>{
                return (
                    <div key={book.id} className="ui cards">
                        <div className="card">
                            <div className="content">
                                <div className="header">{book.name}</div>
                                <div className="meta">{book.id}</div>
                                <div className="description">{book.desc}</div>
                            </div>
                        </div>
                    </div>
                )
            })
        })
    }
    return (
        <div>{getBookList(books)}</div>
    );
}

export default BookList;

