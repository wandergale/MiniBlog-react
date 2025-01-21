//CSS
import "./App.css";

// firebase
import { onAuthStateChanged } from "firebase/auth";
// Routes

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// context
import { AuthContextProvider } from "./context/AuthContext";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";
import Post from "./pages/Post/Post";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, [auth]);

  if (loadingUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={!user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
