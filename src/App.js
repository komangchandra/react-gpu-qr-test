import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute"; // Import PublicRoute
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Jika sudah login, tidak bisa akses Login */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Home & Scan hanya bisa diakses setelah login */}
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
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
