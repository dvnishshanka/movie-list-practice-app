import './App.css';
import MoviesList from './components/MoviesList';
import Button from './components/common/Button';
import { useState, useEffect, useCallback } from 'react';
import Card from './components/common/Card';
import AddMovie from './components/AddMovie';

// const DUMMY_MOVIES = [
//   {
//     id: 1,
//     title: 'Dummy movie 1',
//     openingText: 'This is the opening text',
//     releaseDate: '2021-09-15',
//   },
//   {
//     id: 2,
//     title: 'Dummy movie 1',
//     openingText: 'This is the opening text',
//     releaseDate: '2021-09-15',
//   },
// ];

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Method 1
  // const fetchMoviesHandler = () => {
  //   fetch('https://swapi.dev/api/films')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedMovies = data.results.map((movie) => {
  //         return {
  //           id: movie.episode_id,
  //           title: movie.title,
  //           openingText: movie.opening_crawl,
  //           releaseDate: movie.release_date,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // };

  // Method 2 -using async and await
  // const fetchMoviesHandler = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     setError(null);
  //     const response = await fetch('https://swapi.dev/api/films');
  //     // console.log(response);

  //     if (!response.ok) {
  //       throw new Error('Something went wrong');
  //     }

  //     const data = await response.json();
  //     const transformedMovies = data.results.map((movie) => {
  //       return {
  //         id: movie.episode_id,
  //         title: movie.title,
  //         openingText: movie.opening_crawl,
  //         releaseDate: movie.release_date,
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   } catch (e) {
  //     // console.log(e.message);
  //     setError(e.message);
  //   }

  //   setIsLoading(false);
  // }, []);

  // Using Firebase

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        'https://react-http-practice-30cfa-default-rtdb.firebaseio.com/movies.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          openingText: data[key].openingText,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies</p>;

  if (isLoading) {
    content = <p>loading ....</p>;
  } else if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  } else if (error) {
    content = <p>{error}</p>;
  }

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(
        'https://react-http-practice-30cfa-default-rtdb.firebaseio.com/movies.json',
        {
          mode: 'no-cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(movie),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section className="card">
        <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>
      </section>
      <section>
        <Card>{content}</Card>
      </section>
    </div>
  );
}

export default App;
