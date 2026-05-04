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
  // 1. Check for empty fields first!
  if (!email || !password) {
    setMessage("Please enter both email and password to sign up.");
    return;
  }

  // 2. Use the signUp method
  const { error } = await supabase.auth.signUp({
    email: email.trim(),
    password: password,
  });

  if (error) {
    setMessage("Error: " + error.message);
  } else {
    // Since you disabled "Confirm Email" in image_62d569.png, 
    // this should log them in immediately!
    setMessage("Sign-up successful!");
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