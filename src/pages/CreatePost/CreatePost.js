// CSS
import styles from "./CreatePost.module.css";

// hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthContext();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image url

    // create array tags

    // check all values

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      craeteBy: user.displayName,
    });

    // redirect to home page
  };

  return (
    <div className={styles.create_post}>
      <h2>Create Post</h2>
      <p>Write about anything</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Write the title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Image url:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Enter the URL of your image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Content:</span>
          <textarea
            name="body"
            required
            placeholder="Enter the content of your post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Enter the tags separated by commas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Create Post</button>}
        {response.loading && (
          <button className="btn" disabled>
            Wait...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
