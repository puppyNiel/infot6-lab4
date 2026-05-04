import './HomePage.css'
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Student Portal Demo</h1>
      <p>A simple integrated web app using Supabase.</p>

      <button onClick={() => navigate("/login")}>
        Get Started
      </button>
    </div>
  );
}