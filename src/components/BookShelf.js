import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           
            {this.props.books.filter((book) => {
                return book.shelf === this.props.shelf;
              }).map((book) => {
                return (
                  <Book 
                    book={book} 
                    key={book.id} 
                    changeShelf={this.props.changeShelf}
                  />
                )
              })
            }  

          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf


