import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>The Page cannot be found</p>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFound;
