// filler page - will update with what will be included here.

// imports
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        paddingBottom: '100px',
        minHeight: '100vh',
      }}
    >
      {/* Page Title */}
      <h1>Calendar</h1>

      {/* Calendar Component */}
      <div style={{ display: 'inline-block', marginTop: '20px' }}>
        <Calendar /> {/* Render the calendar */}
      </div>
    </div>
  );
};

export default CalendarPage;