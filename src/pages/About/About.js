// CSS
import styles from "./About.module.css";

// Route
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        About the Mini <span>Blog</span>
      </h2>
      <p>
        This project is a blog build with React on the front-end and Firebase on
        the back-end
      </p>
      <Link to="/posts/create" className="btn">
        Create post
      </Link>
    </div>
  );
};

export default About;
