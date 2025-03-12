import { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

const Scan = () => {
  const [scanResult, setScanResult] = useState("Belum ada hasil");
  const [cameraId, setCameraId] = useState(null);

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
          qrbox: { width: 250, height: 250 }, // Kotak area scan
        },
        (decodedText) => {
          setScanResult(decodedText);
          html5QrCode.stop(); // Hentikan pemindaian setelah sukses
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

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h3 className="mb-4">Scan QR Code</h3>
      <div id="reader" style={{ width: "300px", height: "300px" }}></div>
      <p className="mt-3 fw-bold text-dark">Hasil: {scanResult}</p>
    </div>
  );
};

export default Scan;
