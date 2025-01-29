// CSS
import styles from "./PostDetail.module.css";

// hooks
import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>{post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <div className={styles.button_container}>
        <Link to={`/posts/${post.id}`} className="btn btn-outline">
          Read
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
