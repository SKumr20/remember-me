import React, { useEffect, useState } from 'react';
import ImageCard from './image-card';
import fetchPopularMovies from '@/services/fetchPopularMovies';
import { motion } from 'framer-motion';
import logic, { shuffleMovies }  from '../logic';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Cards = () => {

  const [movies, setMovies] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchPopularMovies();
      setMovies(movieData);
    };

    getMovies();
  }, []);

  const handleClick = async (movieId) => {
    await logic(movieId, clickedCards, setClickedCards, score, setScore, fetchPopularMovies, setMovies);
  };

  return (
    <>  
        <div>
          <h2 className='text-xl'>Score: {score}</h2>
          <div className='grid gap-6 grid-cols-5'>
            {movies.map((movie) => (
              <motion.div 
              key={movie.id} 
              onClick = {() => {
                handleClick(movie.id);
                shuffleMovies(movies, setMovies)
              }}
              layout // Enables smooth position animations
              whileTap={{ scale: 0.9 }} // Shrinks when clicked
              transition={{ type: "spring", stiffness: 100, damping: 14 }}
              className='cursor-pointer'

              >
                  <ImageCard
                  caption={movie.title}
                  imageUrl={`${IMAGE_BASE_URL}${movie.poster_path}`} >
                </ImageCard>
              </motion.div>
            ))}

          </div>
        </div>


    </>
  )
}

export default Cards