function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="Not found" />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres?.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
