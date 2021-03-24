import React, {useState} from 'react';
import { getMovies } from '../utils/movieService';
import Movie from './Movie';

const Movies = () => {
    const [movie, setMovie] = useState([]);

    const handleClick = async() => {
        const data = await getMovies();
        setMovie(data);
    };
    
    return (
        <>
        <button type="button" onClick={handleClick}>Show me the movies</button>
        {movie.map(movie => <Movie title={movie.title} actor={movie.actor} />)}
        </>
    ); 
};

export default Movies; 