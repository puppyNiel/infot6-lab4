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
  <div className="login-container">
  <div className="login-card">
    <h2>Welcome</h2>
    <p>Sign in to your Student Portal</p>
    
    <div className="input-group">
      <input 
        type="email" 
        placeholder="Email Address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="input-group">
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <div className="button-group">
      <button className="btn-primary" onClick={handleLogin}>Login</button>
      <button className="btn-secondary" onClick={handleSignUp}>Create Account</button>
    </div>

    {message && (
      <div className={`status-message ${message.includes('successful') ? 'success' : ''}`}>
        {message}
      </div>
    )}
  </div>
</div>
  );
}