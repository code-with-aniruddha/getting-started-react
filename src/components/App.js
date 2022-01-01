import React, {useState, useEffect} from "react";
import BookList from "./BookList";
import Books from "../data/books.json";
import Categories from "./Categories";

const App = ()=>{
    const [books, setBooks] = useState(Books);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(()=>{
        if(selectedCategory){
            const updatedbooks = books.filter(book=> book.categories===selectedCategory);
            setBooks(updatedbooks);
        } else {
            setBooks(Books);
        }
        
    }, [selectedCategory]);

    return (
        <div>
            <Categories onSetSelectedCategory={setSelectedCategory} categories={Books}/>
            <BookList books={books}/>
        </div>
    );
}

export default App;