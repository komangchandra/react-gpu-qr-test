import { useEffect, useState } from "react";
import axios from "axios";
import { Html5Qrcode } from "html5-qrcode";

const Scan = () => {
  const [scanResult, setScanResult] = useState("Belum ada hasil");
  const [cameraId, setCameraId] = useState(null);
  const [unitData, setUnitData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mendapatkan daftar kamera
    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          // Cari kamera belakang
          const backCamera = devices.find((device) =>
            device.label.toLowerCase().includes("back")
          );
          setCameraId(backCamera ? backCamera.id : devices[0].id);
        }
      })
      .catch((err) => console.error("Error mendapatkan kamera:", err));
  }, []);

  useEffect(() => {
    if (!cameraId) return;

    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode
      .start(
        cameraId,
        {
          fps: 25, // Kecepatan scan (frame per detik)
          qrbox: { width: 250, height: 350 }, // Kotak area scan
        },
        async (decodedText) => {
          setScanResult(decodedText);
          html5QrCode.stop(); // Hentikan pemindaian setelah sukses
          await fetchUnitData(decodedText); // Ambil data unit berdasarkan unit_id
        },
        (errorMessage) => {
          console.warn("Gagal membaca QR Code:", errorMessage);
        }
      )
      .catch((err) => console.error("Error memulai kamera:", err));

    return () => {
      html5QrCode
        .stop()
        .catch((err) => console.error("Error menghentikan kamera:", err));
    };
  }, [cameraId]);

  // Fungsi untuk mengambil data unit berdasarkan unit_id
  const fetchUnitData = async (unit_id) => {
    try {
      const response = await axios.get(
        `https://gpu.komangchandra.my.id/api/units/${unit_id}`
      );
      setUnitData(response.data);
      setError(null); // Reset error jika berhasil
    } catch (err) {
      setUnitData(null);
      setError("Data unit tidak ditemukan.");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h3 className="mb-4">Scan QR Code</h3>
      <div id="reader" style={{ width: "300px" }}></div>
      <p className="mt-3 fw-bold text-dark">Hasil: {scanResult}</p>

      {unitData && (
        <div className="mt-4 p-3 bg-white rounded shadow">
          <h5>Data Unit</h5>
          <p>
            <strong>Unit ID:</strong> {unitData.unit_id}
          </p>
          <p>
            <strong>Nama:</strong> {unitData.unit_name}
          </p>
          <p>
            <strong>Owner:</strong> {unitData.owner}
          </p>
        </div>
      )}

      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default Scan;
