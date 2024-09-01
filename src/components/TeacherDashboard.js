import React, { useState } from "react";
import QRCodeGenerator from "./QRCodeGenerator";
import axios from 'axios';
import { saveAs } from 'file-saver';
import './TeacherDashboard.css'; // Import the CSS file for styling

function TeacherDashboard() {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [qrData, setQrData] = useState(null);

  const handleGenerateQR = () => {
    if (subject && date) {
      // QR code content would include subject and date
      const qrData = JSON.stringify({ subject, date });
      setQrData(qrData);
    } else {
      alert("Please select both a subject and a date.");
    }
  };

  const downloadReport = () => {
    axios.get('http://localhost:5000/attendance')
      .then((response) => {
        const blob = new Blob([JSON.stringify(response.data)], { type: 'text/csv' });
        saveAs(blob, 'attendance-report.csv');
      })
      .catch((error) => {
        console.error("There was an error downloading the report:", error);
      });
  };

  return (
    <div className="teacher-dashboard">
      <h2>Teacher Dashboard</h2>
      <div className="form-group">
        <label htmlFor="subject">Select Subject:</label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {["Math", "Science", "English"].map(subj => (
            <option key={subj} value={subj}>{subj}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="date">Select Date:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button className="generate-button" onClick={handleGenerateQR}>Generate QR Code</button>
        <button className="download-button" onClick={downloadReport}>Download Attendance Report</button>
      </div>
      {qrData && <QRCodeGenerator qrData={qrData} />}
    </div>
  );
}

export default TeacherDashboard;
