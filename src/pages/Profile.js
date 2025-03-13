import React from "react";

const Profile = () => {
  const nama = sessionStorage.getItem("userName");
  console.log(nama);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ width: "350px", padding: "30px" }}
      >
        <h4 className="text-center fw-bold mb-3">{nama}</h4>
      </div>
    </div>
  );
};

export default Profile;
