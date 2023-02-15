import classes from './MoviesList.module.css';
import Movie from './Movie';
import Card from './common/Card';

const MoviesList = (props) => {
  return (
    <Card>
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
    </Card>
  );
};

export default MoviesList;
