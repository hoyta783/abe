import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { doc, getDoc} from "firebase/firestore"; 


function App() {
  return (
    <div className="App">
      <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <h1>Books</h1>
    </div>
  );
}

class Books {
  constructor (Author, Title, Date_Finished ) {
      this.Author = Author;
      this.Title = Title;
      this.Date_Finished = Date_Finished;
  }
  toString() {
      return this.Author + ', ' + this.Title + ', ' + this.Date_Finished;
  }
}


const bookConverter = {
  toFirestore: (book) => {
      return {
          Author: book.Author,
          Title: book.Title,
          Date_Finished: book.Date_Finished
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new book(data.Author, data.Title, data.Date_Finished);
  }
};



export default App;
