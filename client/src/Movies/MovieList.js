import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MovieCardCss = styled.section`

border: 2px solid black;
background-color: dimgrey;
`

const MovieList = props => {
  // console.log(props)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    
    <MovieCardCss>
    <Link to={`/movies/${movie.id}`}>
      <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </MovieCardCss>
    
  );
}

export default MovieList;
