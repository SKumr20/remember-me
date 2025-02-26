

const logic = async (movieId, clickedCards, setClickedCards, score, setScore, fetchMovies, setMovies ) => {
  if (clickedCards.has(movieId)) {
    alert('Game over! Final Score: ' + score);
    setScore(0);
    setClickedCards(new Set());
    const newMovies = await fetchMovies();
    setMovies(newMovies);
  }
  else {
    const newClickedCards = new Set(clickedCards);
    newClickedCards.add(movieId);
    setClickedCards(newClickedCards);
    setScore(score + 1);

    // max score is 10
    if (newClickedCards.size === 10) {
        alert('Congrats, you won!');
        setScore(0);
        setClickedCards(new Set());
        const newMovies = await fetchMovies();
        setMovies(newMovies);
    }
  }
};

export default logic;

export const shuffleMovies = (movies, setMovies) => {
    setMovies([...movies].sort(() => Math.random() -  0.5));
}