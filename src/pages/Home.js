import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Welcome to MARKED! - Your Own Attendance Tracker</h2>
            <div style={styles.linkContainer}>
                <Link to="/teacher" style={styles.linkButton}>Visit Teacher Dashboard</Link>
            </div>
            <div style={styles.linkContainer}>
                <Link to="/student" style={styles.linkButton}>Visit Student Dashboard</Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    title: {
        fontSize: '24px',
        color: '#333',
    },
    linkContainer: {
        margin: '20px 0',
    },
    linkButton: {
        display: 'inline-block',
        padding: '10px 15px',
        backgroundColor: '#f1356d',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        margin: '10px',
    },
};

export default Home;
