import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <nav>
      <Link to="/Artists">Artists</Link>
      <Link to="/instruments">instruments</Link>
      <Link to="/genres">genres</Link>
      <Link to="/Artists/f27ec8db-af05-4f36-916e-3d57f91ecf5e/releases">
        Releases
      </Link>
    </nav>
  );
}
