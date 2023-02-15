import './App.css';
import MoviesList from './components/MoviesList';
import Button from './components/common/Button';
import { useState } from 'react';

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
  async function fetchMoviesHandler() {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    const transformedMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setMovies(transformedMovies);
  }

  return (
    <div className="App">
      <>
        <section className="card">
          <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>
        </section>
        <section>
          <MoviesList movies={movies} />
        </section>
      </>
    </div>
  );
}

export default App;
