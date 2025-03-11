import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");

  const loign = (e) => {
    console.log("test");
    console.log(nama);
    console.log(password);
    Swal.fire({
      title: "Berhasil Login!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ width: "350px", padding: "30px" }}
      >
        <h4 className="text-center fw-bold mb-3">LOGIN</h4>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nama"
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={loign} className="btn btn-primary w-100">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
