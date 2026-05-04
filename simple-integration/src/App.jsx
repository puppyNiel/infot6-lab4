import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Counter } from "./pages/Counter";

function App() {
  return (
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
  );
}

export default App;