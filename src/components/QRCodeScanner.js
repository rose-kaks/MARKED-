import React, { useState } from 'react';
import axios from 'axios';
import QrScanner from 'react-qr-scanner';

function QRCodeScanner() {
    const [scannedData, setScannedData] = useState('');
    const [message, setMessage] = useState('');

    const handleScan = (data) => {
        if (data) {
            setScannedData(data.text);
            markAttendance(data.text);
        }
    };

    const handleError = (error) => {
        console.error('QR Code Scan Error:', error);
        setMessage('Error scanning QR code. Please try again.');
    };

    const markAttendance = async (qrData) => {
        const { studentId, subject } = JSON.parse(qrData);
        const today = new Date().toISOString().split('T')[0];
        try {
            await axios.post('http://localhost:5000/attendance', { studentId, subject, date: today });
            setMessage(`Attendance marked for student ID: ${studentId} in ${subject}`);
        } catch (error) {
            console.error('Error marking attendance:', error);
            setMessage('Error marking attendance. Please try again.');
        }
    };
    

    const previewStyle = {
        height: 240,
        width: 320,
    };

    return (
        <div className="qr-scanner-container">
            <h2 className="qr-scanner-title">QR Code Attendance Scanner</h2>
            <div className="qr-scanner-preview">
                <QrScanner
                    delay={300}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                />
            </div>
            {message && (
                <p className={message.includes('Error') ? 'qr-scanner-message' : 'qr-scanner-success'}>
                    {message}
                </p>
            )}
            {scannedData && <p className="qr-scanner-success">Scanned Data: {scannedData}</p>}
        </div>
    );
}

export default QRCodeScanner;
