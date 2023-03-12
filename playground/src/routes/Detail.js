import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Please Wait Detail Loading..</h1>
      ) : (
        <div>
          <img src={detail.medium_cover_image} alt={detail.title} />
          <h2>
            {detail.title} ({detail.year})
          </h2>
          <h3>Rating: {detail.rating}</h3>
          <h3>Runtime: {detail.runtime}</h3>
          <p>{detail.description_full}</p>
          <ul>
            <h4>
              <strong>Genres</strong>
            </h4>
            {detail.genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
