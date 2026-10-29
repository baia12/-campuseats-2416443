import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section className="not-found">
      <h2>404 - Page Not Found</h2>

      <p>Sorry, the page does not exist.</p>

      <Link to="/">Return to Home</Link>
    </section>
  );
}

export default NotFoundPage;
