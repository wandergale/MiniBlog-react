import { useState } from "react";
import { NavLink } from "react-router-dom";

// CSS
import styles from "./Navbar.module.css";

// Auth
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useAuthentication();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>

      <ul className={`${styles.links_list} ${menuOpen ? styles.active : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Register
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Create Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
