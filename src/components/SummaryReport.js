import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SummaryReport() {
    const [attendanceData, setAttendanceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/attendance')
            .then(response => {
                setAttendanceData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching attendance:', error);
                setError('Failed to load attendance data');
                setLoading(false);
            });
    }, []);

    const downloadReport = () => {
        const dataStr = JSON.stringify(attendanceData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `attendance_report_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url); // Clean up the URL object after download
    };

    if (loading) return <p>Loading attendance data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Summary Report</h2>
            {attendanceData.length > 0 ? (
                <div>
                    <button onClick={downloadReport}>Download Report</button>
                </div>
            ) : (
                <p>No attendance data available.</p>
            )}
        </div>
    );
}

export default SummaryReport;
