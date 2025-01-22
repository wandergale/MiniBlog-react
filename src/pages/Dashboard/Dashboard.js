// CSS
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// hooks
import { useAuthContext } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthContext();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Manage your posts</p>
      {loading && <p>Loading...</p>}
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Any posts found...</p>
          <Link to="/posts/create" className="btn">
            Create post
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem posts</p>
          {posts && posts.map((post) => <h3>{post.title}</h3>)}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
