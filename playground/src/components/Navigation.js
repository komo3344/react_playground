import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="movie/39909">Detail</Link>
    </div>
  );
}

export default Navigation;
