import React from "react";

function WarningNotification({ warnings }) {
  return (
    <div>
      {warnings.length > 0 && (
        <div className="warning">
          <h3>Attendance Warning!</h3>
          <p>You have less than 75% attendance in the following subjects:</p>
          <ul>
            {warnings.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WarningNotification;
