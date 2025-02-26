const API_KEY = import.meta.env.VITE_TMDB_API;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = async (count = 8) => {
    try {
        const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results.slice(0, count);
    } catch (error) {
        console.error('Error fetching movies: ', error);
        return [];
    }
}

export default fetchPopularMovies;