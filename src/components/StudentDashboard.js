import React, { useState, useEffect } from "react";
import axios from "axios";
import WarningNotification from "./WarningNotification.js";
import AttendanceSummary from "./AttendanceSummary.js";
import CalendarView from "./CalendarView.js";
import SuggestionFeature from "./SuggestionFeature.js";
import QRCodeScanner from "./QRCodeScanner.js"; // Import the QRCodeScanner component

function StudentDashboard() {
  const [studentData, setStudentData] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    // Fetching student data
    axios.get("http://localhost:5000/students/1")
        .then(response => {
            setStudentData(response.data);
            setAttendance(response.data.attendance);
        })
        .catch(error => {
            console.error('Error fetching student data:', error);
        });

    // Fetching attendance records
    axios.get("http://localhost:5000/attendance")
        .then(response => {
            const attendanceRecords = response.data;
            const totalClasses = {};
            const presentClasses = {};

            attendanceRecords.forEach(record => {
                const { subject } = JSON.parse(record.studentId);
                if (!totalClasses[subject]) {
                    totalClasses[subject] = 0;
                    presentClasses[subject] = 0;
                }
                totalClasses[subject]++;
                if (record.date === new Date().toISOString().split('T')[0]) {
                    presentClasses[subject]++;
                }
            });

            const lowAttendanceSubjects = [];
            for (let subject in totalClasses) {
                const attendancePercentage = (presentClasses[subject] / totalClasses[subject]) * 100;
                if (attendancePercentage < 75) {
                    lowAttendanceSubjects.push(subject);
                }
            }
            setWarnings(lowAttendanceSubjects);
        })
        .catch(error => {
            console.error('Error fetching attendance data:', error);
        });
}, []);

  return (
    <div>
      <h2>Welcome, Student!</h2>
      <WarningNotification warnings={warnings} />
      <AttendanceSummary attendance={attendance} />
      <CalendarView />
      <SuggestionFeature studentId={studentData.id} />
      <QRCodeScanner /> {/* Add QRCodeScanner component here */}
    </div>
  );
}

export default StudentDashboard;
