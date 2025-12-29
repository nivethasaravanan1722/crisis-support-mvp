import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./pages/Login";
import CreateCrisis from "./pages/CreateCrisis";
import MyCrises from "./pages/MyCrises";

/**
 * Protect routes using token
 */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
        <Link to="/">Login</Link> |{" "}
        <Link to="/create">Create Crisis</Link> |{" "}
        <Link to="/my">My Crises</Link> |{" "}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </nav>

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Login />} />

        {/* PROTECTED */}
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateCrisis />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my"
          element={
            <ProtectedRoute>
              <MyCrises />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
