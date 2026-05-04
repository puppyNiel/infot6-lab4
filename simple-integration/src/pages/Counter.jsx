import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Counter.css';

export function Counter() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="counter-container">
      <nav className="navbar">
        <div className="logo">Student<span>Portal</span></div>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </nav>

      <div className="counter-card">
        <h2>Dashboard</h2>
        <p>Current Session Activity</p>
        
        <div className="count-display">{count}</div>
        
        <div className="counter-controls">
          <button onClick={() => setCount(count - 1)}>−</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}