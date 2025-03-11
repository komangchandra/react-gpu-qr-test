const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h3 className="mb-4">MENU APLIKASI</h3>
      <div className="container">
        <div className="row g-3 justify-content-center">
          <div className="col-5 col-md-3">
            <div className="card shadow-lg border-0 rounded-4 bg-info text-white text-center p-4">
              <p>Menu 1</p>
            </div>
          </div>
          <div className="col-5 col-md-3">
            <div className="card shadow-lg border-0 rounded-4 bg-primary text-white text-center p-4">
              <p>Menu 2</p>
            </div>
          </div>
          <div className="col-5 col-md-3">
            <div className="card shadow-lg border-0 rounded-4 bg-success text-white text-center p-4">
              <p>Menu 3</p>
            </div>
          </div>
          <div className="col-5 col-md-3">
            <div className="card shadow-lg border-0 rounded-4 bg-danger text-white text-center p-4">
              <p>Menu 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
