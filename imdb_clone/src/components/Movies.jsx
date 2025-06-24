import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moviecard from './Moviecard';
import Pagination from './Pagination';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = '59af75de003937def5f683f24889a4f2';
      const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
      const languages = ['en', 'ta', 'hi', 'te'];

      try {
        const responses = await Promise.all(
          languages.map(lang =>
            axios.get(`${baseUrl}?api_key=${apiKey}&with_original_language=${lang}`)
          )
        );

        const allMovies = responses.flatMap(res => res.data.results);
        const uniqueMovies = Array.from(new Map(allMovies.map(m => [m.id, m])).values());

        setMovies(uniqueMovies);
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className='text-2xl text-green-700 font-bold p-3 text-center mt-3'>
        Trending movies
      </div>

      <div className='flex flex-wrap justify-around'>
        {movies.map((movie) => (
          <Moviecard key={movie.id} poster_path={movie.poster_path} name={movie.original_title} />
        ))}
      </div>

      <Pagination />
    </>
  );
}

export default Movies;
