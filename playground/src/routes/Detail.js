import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({
    title: null,
    like_count: null,
    year: null,
    largeImg: null,
  });
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie({
      title: json.data.movie.title,
      like_count: json.data.movie.like_count,
      year: json.data.movie.year,
      largeImg: json.data.movie.large_cover_image,
    });
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <img src={movie.largeImg} alt="Not found" />
          <h2>{movie.title}</h2>
          <h3>Year: {movie.year}</h3>
          <p>좋아요: {movie.like_count}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
