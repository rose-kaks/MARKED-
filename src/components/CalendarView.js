import React, { useState, useEffect } from "react";
import axios from "axios";

function CalendarView() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/holidays").then((response) => {
      setHolidays(response.data);
    });
  }, []);

  return (
    <div>
      <h3>Class Calendar</h3>
      <ul>
        {holidays.map((holiday, index) => (
          <li key={index}>Holiday on: {holiday}</li>
        ))}
      </ul>
    </div>
  );
}

export default CalendarView;
