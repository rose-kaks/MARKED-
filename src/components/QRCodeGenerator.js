import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRCodeGenerator({ qrData }) {
  const downloadQRCode = () => {
    const canvas = document.getElementById("qrCodeCanvas");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr_code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <h3>QR Code for Attendance</h3>
      <QRCodeCanvas id="qrCodeCanvas" value={qrData} size={200} level={"H"} includeMargin={true} />
      <button onClick={downloadQRCode}>Download QR Code</button>
    </div>
  );
}

export default QRCodeGenerator;
