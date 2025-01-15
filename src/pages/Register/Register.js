///CSS
import styles from "./Register.module.css";

import { useState, UseEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Register to post</h1>
      <p>Create your account and share your stories.</p>
      <form>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="User name"
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="User e-mail" />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Create your password"
          />
        </label>
        <label>
          <span>Confirm password:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm password"
          />
        </label>
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
