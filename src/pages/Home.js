import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear(); // Hapus semua session storage
    navigate("/"); // Redirect ke login
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h3 className="mb-4">MENU APLIKASI</h3>
      <div className="container">
        <div className="row g-3 justify-content-center">
          {/* INFO FUEL TRUCK */}
          <div className="col-5 col-md-3">
            <div
              className="card shadow-lg border-0 rounded-4 bg-info text-white text-center p-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/info")}
            >
              <p>INFO FUEL TRUCK</p>
            </div>
          </div>

          {/* INFO */}
          <div className="col-5 col-md-3">
            <div
              className="card shadow-lg border-0 rounded-4 bg-primary text-white text-center p-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/scan")}
            >
              <p>SCAN BARCODE</p>
            </div>
          </div>

          {/* AKUN */}
          <div className="col-5 col-md-3">
            <div
              className="card shadow-lg border-0 rounded-4 bg-success text-white text-center p-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/info")}
            >
              <p>INFO AKUN FUEL MAN</p>
            </div>
          </div>

          {/* LOGOUT */}
          <div className="col-5 col-md-3">
            <div
              className="card shadow-lg border-0 rounded-4 bg-danger text-white text-center p-4"
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
            >
              <p>LOGOUT / KELUAR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
