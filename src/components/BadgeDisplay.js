// src/components/BadgeDisplay.js
import React from 'react';

function BadgeDisplay({ badges }) {
  return (
    <div>
      <h2>Badges</h2>
      {badges.map((badge, index) => (
        <p key={index}>{badge}</p>
      ))}
    </div>
  );
}

export default BadgeDisplay;
