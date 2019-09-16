import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' component={Movie}/>
      </div>

      
    </div>
  );
};

export default App;



