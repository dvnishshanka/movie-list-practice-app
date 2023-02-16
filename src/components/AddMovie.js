import classes from './AddMovie.module.css';
import Card from './common/Card';
import { useRef } from 'react';
import Button from './common/Button';

const AddMovie = (props) => {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddMovie({
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    });
    titleRef.current.value = '';
    openingTextRef.current.value = '';
    releaseDateRef.current.value = '';
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref={titleRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="openingText">Opening Text</label>
          <textarea
            rows="5"
            cols="50"
            name="openingText"
            ref={openingTextRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="releaseDate">Release Date</label>
          <input type="date" name="releaseDate" ref={releaseDateRef}></input>
        </div>
        <Button type="submit">Add Movie</Button>
      </form>
    </Card>
  );
};

export default AddMovie;
