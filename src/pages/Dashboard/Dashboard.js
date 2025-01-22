// CSS
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// hooks
import { useAuthContext } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthContext();
  const uid = user.uid;

  const posts = [];
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Manage your posts</p>
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
        </div>
      )}
    </div>
  );
};

export default Dashboard;
