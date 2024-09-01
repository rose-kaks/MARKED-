// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import CalendarView from './components/CalendarView.js';
import SuggestionFeature from './components/SuggestionFeature.js';
import BadgeDisplay from './components/BadgeDisplay';
import Navbar from './Navbar';
import NotFound from './pages/NotFound';  // Import the NotFound page
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} /> {/* No need for `exact` in v6 */}
                <Route path="/teacher" element={<TeacherDashboard />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/calendar" element={<CalendarView />} />
                <Route path="/suggestions" element={<SuggestionFeature />} />
                <Route path="/badges" element={<BadgeDisplay />} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 errors */}
              </Routes>
            </div>
            <Footer />
      </div>
    </Router>
  );
}

export default App;