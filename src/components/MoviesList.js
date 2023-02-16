import classes from './MoviesList.module.css';
import Movie from './Movie';

const MoviesList = (props) => {
  return (
    <ul className={classes.movies}>
      {props.movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            openingText={movie.openingText}
            releaseDate={movie.releaseDate}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
