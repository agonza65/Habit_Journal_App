import React, { useState } from 'react';

const Weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const WeeklyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInWeek = [];
  const startDate = new Date(currentDate);
  startDate.setDate(startDate.getDate() - startDate.getDay()); // Start from the previous Sunday

  for (let i = 0; i < 7; i++) {
    const day = new Date(startDate);
    day.setDate(day.getDate() + i);
    daysInWeek.push(day);
  }

  return (
    <div>
      <h2>Weekly Calendar</h2>
      <table>
        <thead>
          <tr>
            {Weekdays.map((weekday, index) => (
              <th key={index}>{weekday}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {daysInWeek.map((day, index) => (
              <td key={index}>{day.toLocaleDateString(undefined, {month: 'short', day: 'numeric' })}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyCalendar;