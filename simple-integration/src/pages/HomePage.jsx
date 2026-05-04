import './HomePage.css'
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='Home-container'>
      <h2>Student Portal Demo</h2>
      <p>A simple integrated web app using Supabase.</p>

      <button className='start-btn' onClick={() => navigate("/login")}>
        Get Started
      </button>
    </div>
  );
}