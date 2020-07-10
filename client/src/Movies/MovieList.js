import React from 'react';
import {Link} from 'react-router-dom';



const MovieList = (props) => {
  // console.log("data injected as props in MovieList:", props)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} style={props.style} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  // const { title, director, metascore, stars, style } = movie;
  return (
    
    <props.style>
    <Link to={`/movies/${props.movie.id}`}>
      <h2>{props.movie.title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars.map(star => (
        <div key={props.movie.star} className="movie-star">
          {star}
        </div>
      ))}
    </props.style>
    
  );
}

export default MovieList;
