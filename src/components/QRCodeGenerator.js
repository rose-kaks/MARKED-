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

  const containerStyle = {
    maxWidth: '300px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
  };

  const headingStyle = {
    marginBottom: '15px',
    color: '#333'
  };

  const canvasStyle = {
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '15px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#4CAF50', // Green
    cursor: 'pointer',
    fontSize: '16px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049'
  };

  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>QR Code for Attendance</h3>
      <QRCodeCanvas id="qrCodeCanvas" value={qrData} size={200} level={"H"} includeMargin={true} style={canvasStyle} />
      <button
        style={buttonStyle}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        onClick={downloadQRCode}
      >
        Download QR Code
      </button>
    </div>
  );
}

export default QRCodeGenerator;
