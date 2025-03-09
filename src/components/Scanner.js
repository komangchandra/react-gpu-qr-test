import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import data from "../data.json"; // Import data.json

const Scanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [unit, setUnit] = useState(""); // Untuk menyimpan unit berdasarkan kode yang discan
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    });

    scanner.render(
      (result) => {
        setScanResult(result);
        scanner.clear();

        // Cari kode dalam data.json
        const foundItem = data.find((item) => item.kode === result);
        if (foundItem) {
          setUnit(foundItem.unit);
        } else {
          setUnit("Data tidak ditemukan");
        }
      },
      (error) => {
        console.warn(error);
      }
    );

    scannerRef.current = scanner;
    return () => scanner.clear();
  }, []);

  return (
    <div>
      <h2>QR Code Scanner</h2>
      {!scanResult ? (
        <div id="reader"></div>
      ) : (
        <div>
          <p><strong>Kode:</strong> {scanResult}</p>
          <p><strong>Unit:</strong> {unit}</p>
        </div>
      )}
    </div>
  );
};

export default Scanner;
