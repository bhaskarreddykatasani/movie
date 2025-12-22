// get elements
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const movies = document.querySelectorAll('.movie-card');

// 🔍 function to filter movies
function filterMovies() {
  const searchText = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  movies.forEach(movie => {
    const title = movie.querySelector('h3').textContent.toLowerCase();
    const genre = movie.getAttribute('data-genre');

    const matchesSearch = title.includes(searchText);
    const matchesGenre = selectedGenre === 'all' || genre === selectedGenre;

    if (matchesSearch && matchesGenre) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
}

// 🔁 event listeners for filtering
searchInput.addEventListener('input', filterMovies);
genreFilter.addEventListener('change', filterMovies);

// 🎬 open movie link on click
movies.forEach(movie => {
  movie.addEventListener('click', () => {
    const link = movie.getAttribute('data-link');
    if (link) {
      window.open(link, '_blank'); // open in new tab
    }
  });
});
