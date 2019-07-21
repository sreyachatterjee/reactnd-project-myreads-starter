import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookSearch extends Component  {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query }, () => {
      this.BookSearch(this.state.query.trim());
    });
  }

  
  BookSearch = (query) => {
    
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        
        if (searchedBooks.length > 0) {
            searchedBooks = searchedBooks.filter((searchedBook) => {
              return searchedBook.imageLinks}).map((searchedBook) => {
                for(let i = 0; i<this.props.books.length; i++){

                  if(this.props.books[i].id === searchedBook.id){
                    searchedBook.shelf = this.props.books[i].shelf;
                    return searchedBook
                  }
                  else {
                    searchedBook.shelf = 'none';
                  }
                }                
              
              return searchedBook;                      
              });

              
          this.setState({ showingBooks: searchedBooks }); 
        }
        else {
          this.setState({ showingBooks: [] });  
        }
      });
    }
    else {
      this.setState({ showingBooks: [] });          
    }
  }

  
  render() {
    const { changeShelf } = this.props;
    const { query, showingBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book, index) => (
            <Book 
              book={book} 
              key={index} 
              changeShelf={changeShelf}
            />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


export default BookSearch