import { useRef, useState } from "react";
import Webcam from "react-webcam";

const Scan = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imgSrc = webcamRef.current.getScreenshot();
    setImage(imgSrc);
    // Kirim ke backend atau gunakan pustaka pemrosesan QR Code
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h3 className="mb-4">Scan QR Code</h3>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/png"
        width="300"
        height="250"
      />
      <button className="btn btn-primary mt-3" onClick={capture}>
        Ambil Gambar
      </button>
      {image && (
        <img src={image} alt="QR Capture" className="mt-3" width="300" />
      )}
    </div>
  );
};

export default Scan;
