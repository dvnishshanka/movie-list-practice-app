import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2 className={classes.title}>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
