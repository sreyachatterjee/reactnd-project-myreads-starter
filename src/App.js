import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import BookSearch from './components/BookSearch'
import BookCategory from './components/BookCategory'

class BooksApp extends React.Component {
  state = {
    books: []
  };
    
  SelectBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.SelectBooks();
  }

  updateBook = (book, shelf) =>  {
    BooksAPI.update(book, shelf).then(() => {
      this.SelectBooks();
    });
  }
        
  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookCategory 
            books={books} 
            changeShelf={this.updateBook}/>
        )}/>
        <Route exact path="/search" render={() => (
          <BookSearch 
            books={books}
            changeShelf = {this.updateBook}
          />
        )}/>
      </div>
    )
  }
}
export default BooksApp