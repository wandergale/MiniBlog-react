// CSS
import styles from "./Search.module.css";

import { Link } from "react-router-dom";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// component
import PostDetail from "../../components/PostDetail";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div>
      <div className={styles.search_container}>
        <h2>Search</h2>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Posts not found</p>
            <Link to="/" className="btn btn-darl">
              Go back
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
