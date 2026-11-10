import { useState } from "react";
import "../styles/Auth.css";
import { Link } from "react-router-dom";

function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!form.name.trim()) {
            setError("Please enter your name.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }



        setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <section className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>Create your Crochic demo profile.</p>

                <label htmlFor="signup-name">Full name</label>
                <input
                    id="signup-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="signup-email">Email</label>
                <input
                    id="signup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="signup-password">Password</label>
                <input
                    id="signup-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    minLength={8}
                    placeholder="At least 8 characters"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="signup-confirm">Confirm password</label>
                <input
                    id="signup-confirm"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    minLength={8}
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {error && (
                    <p className="auth-error" role="alert">
                        {error}
                    </p>
                )}

                {success && (
                    <p className="auth-success" role="status">
                        {success}
                    </p>
                )}

                <button type="submit">Sign Up</button>
                <p className="mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>


            </form>
        </section>
    );
}

export default Signup;