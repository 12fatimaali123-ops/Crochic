import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "Demo completed. No account authentication was performed."
    );

    setPassword("");
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Welcome back to Crochic.</p>

        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
          required
        />

        {message && (
          <p className="auth-success" role="status">
            {message}
          </p>
        )}

        <button type="submit">Login</button>

        <p className="mt-3">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>

        
      </form>
    </section>
  );
}

export default Login;