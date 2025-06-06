import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">HEALTHY MATE - Dashboard</h1>

      <div className="d-flex flex-column align-items-center gap-3">
        <button className="btn btn-primary btn-lg w-50">
          Calculator BMI
        </button>

        <button className="btn btn-success btn-lg w-50">
          Rekomendasi Kesehatan
        </button>

        <button className="btn btn-info btn-lg w-50 text-white">
          Riwayat Kesehatan
        </button>
      </div>
    </div>
  );
}

export default App;
