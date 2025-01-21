//CSS
import styles from "./Home.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

// components

const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>New posts</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Search for tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Search</button>
      </form>
      <div>
        <h2>Posts</h2>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Oops! No posts found yet.</p>
            <Link to="/posts/create" className="btn">
              Create post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
