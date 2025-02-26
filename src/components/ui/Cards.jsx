import React, { useEffect, useState } from 'react';
import ImageCard from './image-card';
import fetchPopularMovies from '@/services/fetchPopularMovies';



const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Cards = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchPopularMovies();
      setMovies(movieData);
    };

    getMovies();
  }, []);



  return (
    <>  
        <div className='grid gap-6 grid-cols-4'>
          {movies.map((movie) => (
              <ImageCard
                key={movie.id}
                caption={movie.title}
                imageUrl={`${IMAGE_BASE_URL}${movie.poster_path}`} >
              </ImageCard>
          ))}

        </div>

    </>
  )
}

export default Cards