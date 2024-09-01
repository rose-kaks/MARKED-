// src/components/AttendanceSummary.js
import React from 'react';

function AttendanceSummary({ attendance }) {
    const totalClasses = 20; // Example: total classes for calculation
    const attendancePercentage = (classesAttended, totalClasses) => {
        return ((classesAttended / totalClasses) * 100).toFixed(2);
    };

    return (
        <div>
            <h2>Attendance Summary</h2>
            {Object.keys(attendance).map((subject) => (
                <div key={subject}>
                    <p>{subject}: {attendance[subject]} / {totalClasses} ({attendancePercentage(attendance[subject], totalClasses)}%)</p>
                </div>
            ))}
        </div>
    );
}

export default AttendanceSummary;
