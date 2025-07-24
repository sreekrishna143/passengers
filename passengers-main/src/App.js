import React from 'react';
import PassengerList from './PassengerList';

function App() {
  const passengerData = [
    { name: 'Alice', mobile: '1234567890', source: 'Delhi', destination: 'Mumbai', date: '2025-07-25' },
    { name: 'Bob', mobile: '0987654321', source: 'Chennai', destination: 'Bangalore', date: '2025-07-26' },
    { name: 'Charlie', mobile: '1122334455', source: 'Kolkata', destination: 'Hyderabad', date: '2025-07-27' },
    { name: 'Alice', mobile: '1234567890', source: 'Delhi', destination: 'Mumbai', date: '2025-07-25' },
    { name: 'Bob', mobile: '0987654321', source: 'Chennai', destination: 'Bangalore', date: '2025-07-26' },
    { name: 'Charlie', mobile: '1122334455', source: 'Kolkata', destination: 'Hyderabad', date: '2025-07-27' },
    { name: 'Diana', mobile: '2233445566', source: 'Pune', destination: 'Goa', date: '2025-07-28' },
    { name: 'Ethan', mobile: '3344556677', source: 'Ahmedabad', destination: 'Jaipur', date: '2025-07-29' }
  ];

  // Style for passenger text: large size and rainbow gradient
  const passengerTextStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  // Pass style as prop to PassengerList

  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px'
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={headingStyle}>Travel Agency Passenger List</h1>
      <PassengerList passengers={passengerData} passengerTextStyle={passengerTextStyle} />
    </div>
  );
}

// Added more passengers and used all colors in the heading gradient above
export default App;
