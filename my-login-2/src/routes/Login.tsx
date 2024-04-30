import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProv";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = useAuth();

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
    
        if (!emailRegex.test(email)) {
            setError("El formato del correo electrónico es incorrecto");
        } else if (email === "admin@admin.com" && password === "admin") {
            auth.setIsAuthenticated(true); // Autenticar al usuario
        } else {
            setError("Email o contraseña incorrectos");
        }
    };

    if (auth.isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <form className="form">
            <h1>Login</h1>
            <label>Email</label>
            <input 
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="button" onClick={handleLogin}>
                Login
            </button>
        </form>
    );
}