import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import './Login.css'

export function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Sign-up successful! Check your email.");
    }
  };
  
  const handleLogin = async () => {
  if (!email || !password) {
    setMessage("Please enter both email and password.");
    return;
  }
  console.log("Submitting:", { email, password });
  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password: password,
  });

  if (error) {
    setMessage("Login failed: " + error.message);
  } else {
    setMessage("Login successful");
    navigate("/counter");
  }
};

  return (
    <div>
      <h2>Login / Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>

      <p>{message}</p>
    </div>
  );
}