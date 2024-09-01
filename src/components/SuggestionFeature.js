import React, { useState, useEffect } from "react";
import axios from "axios";

function SuggestionFeature({ studentId }) {
  const [careerGoal, setCareerGoal] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/careerGoals?studentId=${studentId}`)
      .then((response) => {
        if (response.data.length > 0) {
          setCareerGoal(response.data[0]);
        }
      });
  }, [studentId]);

  return (
    <div>
      {careerGoal && (
        <div>
          <h3>Your Career Goal: {careerGoal.goal}</h3>
          <p>Recommended Subjects:</p>
          <ul>
            {careerGoal.suggestedSubjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SuggestionFeature;
