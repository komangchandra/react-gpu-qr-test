import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scan = () => {
  const [scanResult, setScanResult] = useState("Belum ada hasil");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 25, // Frames per second
      qrbox: { width: 250, height: 250 }, // Ukuran area scan
    });

    scanner.render(
      (result) => {
        setScanResult(result);
        scanner.clear(); // Hentikan scanner setelah berhasil membaca QR Code
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      scanner.clear(); // Bersihkan scanner saat komponen di-unmount
    };
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h3 className="mb-4">Scan QR Code</h3>
      <div
        id="reader"
        className="shadow-lg border-0 rounded-4 bg-white"
        style={{ width: "300px" }}
      ></div>
      <p className="mt-3 fw-bold text-dark">Hasil: {scanResult}</p>
    </div>
  );
};

export default Scan;
