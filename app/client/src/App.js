import React, { Component } from "react";
import "./App.css";
import API from "./utils/API"
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import { List, ListItem } from "./components/List"

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>{
        this.setState({ books: res.data})
        console.log(res.data)
      }
        )
      .catch(err => console.log(err));
  };

  Books =(props)=>{
    console.log(props.book)
    if(!props.book) return <></>
    else{
        return <strong>{props.book.title}
        {
          props.book.authors.map((e,i)=>{
            return <span key={i}>{e}</span>
          })
        }
        </strong>
      
    }
  }

  render() {
    return (

      <div className="App">
        <div className="hey">
          <Jumbotron>
          <Nav/>
            <div className="header"> LETS FIND YOU A BOOK</div>
            
          </Jumbotron>
          
        </div>

        <div className="container">
          <div className="App-intro">
          {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    
                      <strong>
                        <this.Books book={book}/>
                      </strong>
                  
                    
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>


        <div className="container2">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>


      </div>
    );
  }
}

export default App;
