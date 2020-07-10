import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import {Route} from 'react-router-dom';
import Movie from "./Movies/Movie";
import styled from 'styled-components';

const MovieCardCss = styled.section`

border: 2px solid black;
background-color: dodgerblue;
`


const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // console.log(response.data)
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList movies={movieList} style={MovieCardCss} />
      </Route>
      <Route path="/movies/:id">
        <Movie style={MovieCardCss}/>
      </Route>
    </div>
  );
};

export default App;
