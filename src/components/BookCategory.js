import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookCategory extends Component {

	render() {
	  
    return (

	  <div className="list-books">
		<div className="list-books-title">
		  <h1>MyReads</h1>
		</div>
		<div className="list-books-content">
		  <div>
			<div className="bookshelf">

			<BookShelf 
              key="currentlyReading"
              books={this.props.books} 
              changeShelf = {this.props.changeShelf}
              title={'Currently Reading'} 
              shelf={'currentlyReading'}       
			/>		

      		<BookShelf 
              key="wantToRead"
              books={this.props.books} 
              changeShelf = {this.props.changeShelf}
              title={'Want to Read'} 
              shelf={'wantToRead'}
			/>
				
        	<BookShelf 
              key="read"
              books={this.props.books} 
              changeShelf = {this.props.changeShelf}
              title={'Read'} 
              shelf={'read'}					
			/>

			</div>
		  </div>
		</div>

		<div className="open-search">
		  <Link
            to='/search'
          >Add a book
		  </Link>
		</div>
	  </div>
    )
  }
}
export default BookCategory

