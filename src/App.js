import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Login bisa diakses siapa saja */}
        <Route path="/" element={<Login />} />

        {/* Halaman Home & Scan hanya bisa diakses setelah login */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scan"
          element={
            <ProtectedRoute>
              <Scan />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
