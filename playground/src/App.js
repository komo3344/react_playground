import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        "Loading.."
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt="Not found" />
              <h2>{movie.title}</h2>
              <p>{movie.description_full}</p>
              <ul>
                {movie.genres?.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      ok
    </div>
  );
}

export default App;
