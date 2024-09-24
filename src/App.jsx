import React, { useState, useEffect } from 'react';
import { addBook, getBooks, deleteBook } from './data/books';
import './App.css';

function App() {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '', rating: '⭐⭐⭐⭐⭐', image: '' });

    const fetchBooks = async () => {
        try {
            const allBooks = await getBooks();
            setBooks(allBooks);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleAddBook = async (e) => {
      e.preventDefault();
      try {
          // Set default image if no image URL is provided
          const bookToAdd = {
              ...newBook,
              image: newBook.image || 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
          };
  
          await addBook(bookToAdd);
          fetchBooks(); // Refresh the book list
          setNewBook({ title: '', author: '', rating: '⭐⭐⭐⭐⭐', image: '' }); // Reset form
      } catch (error) {
          console.error("Error adding book:", error);
      }
  };  

    const handleDeleteBook = async (id) => {
        try {
            await deleteBook(id);
            fetchBooks();
        } 
        catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    const changeRating = (id, change) => {
      const updatedBooks = books.map(book => {
          if (book.id === id) {
              // Calculate new rating based on change
              const currentRatingLength = book.rating.length; // Get current number of stars
              let newRatingLength = currentRatingLength + change; // Update the rating
  
              // Ensure the new rating is within bounds of 1 to 5
              if (newRatingLength < 1) newRatingLength = 1; // Minimum 1 star
              if (newRatingLength > 5) newRatingLength = 5; // Maximum 5 stars
  
              // Return updated book with the new rating
              return { 
                  ...book, 
                  rating: '⭐'.repeat(newRatingLength) 
              };
          } else {
              return book; // Return unchanged book
          }
      });
      setBooks(updatedBooks); // Update state with new book ratings
  };  

    return (
      <div>
          <h1>Community Book Board</h1>
          <form onSubmit={handleAddBook}>
        <input className='input'
            type="text" 
            placeholder="What book would you like to add?" 
            value={newBook.title} 
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} 
            required 
        />
        <input className='input'
            type="text" 
            placeholder="Who is the author?" 
            value={newBook.author} 
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} 
            required 
        />
        <input className = 'input'
            type="text" 
            placeholder="Find an Image URL to make your book stand out!" 
            value={newBook.image} 
            onChange={(e) => setNewBook({ ...newBook, image: e.target.value })} 
            required 
        />
        <button type="submit">Add Book</button>
    </form>
          
    <div className="book-list">
        {books.map(book => (
            <div key={book.id} className="book-card">
                <img src={book.image} alt={book.title} className="book-image" />
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">{book.author}</p>
                <p className="book-rating">{book.rating}</p>
                <div className="rating-controls">
                    <button onClick={() => changeRating(book.id, -1)}>-</button>
                    <button onClick={() => changeRating(book.id, 1)}>+</button>
                </div>
                <button className="delete-button" onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  );  
}

export default App;