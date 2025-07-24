// PassengerList.js
import React, { useState } from 'react';

function PassengerList({ passengers }) {
  const [selectedPassengers, setSelectedPassengers] = useState([]);

  const handleAddPassenger = (passenger) => {
    if (!selectedPassengers.includes(passenger)) {
      setSelectedPassengers([...selectedPassengers, passenger]);
    }
  };

  return (
    <div>
      <div style={{ ...passengerCountStyle, fontSize: '1.5em' }}>
        All Passengers: {passengers.length}
      </div>
      <h2 style={{ fontSize: '1.5em' }}>All Passengers</h2>
      <ul>
        {passengers.map((p, index) => (
          <li key={index} style={{ marginBottom: '1em', fontSize: '1.2em' }}>
            <div>
              <strong>Name:</strong>{' '}
              <ColoredText text={p.name} color={colors[index % colors.length]} />
            </div>
            <div>
              <strong>Mobile:</strong>{' '}
              <ColoredText text={p.mobile} color={colors[(index + 1) % colors.length]} />
            </div>
            <div>
              <strong>From:</strong>{' '}
              <ColoredText text={p.source} color={colors[(index + 2) % colors.length]} />
            </div>
            <div>
              <strong>To:</strong>{' '}
              <ColoredText text={p.destination} color={colors[(index + 3) % colors.length]} />
            </div>
            <div>
              <strong>Date:</strong>{' '}
              <ColoredText text={p.date} color={colors[(index + 4) % colors.length]} />
            </div>
            <button style={{ fontSize: '1.1em' }} onClick={() => handleAddPassenger(p)}>Add to List</button>
          </li>
        ))}
      </ul>

      <div style={{ ...selectedCountStyle, fontSize: '1.3em' }}>
        Selected Passengers: {selectedPassengers.length}
      </div>
      <h3 style={{ fontSize: '1.3em' }}>Selected Passengers</h3>
      <ul>
        {selectedPassengers.map((p, index) => (
          <li key={index} style={{ fontSize: '1.1em' }}>
            <ColoredText text={p.name} color={colors[index % colors.length]} /> (
            <ColoredText text={p.source} color={colors[(index + 2) % colors.length]} /> →
            <ColoredText text={p.destination} color={colors[(index + 3) % colors.length]} />)
          </li>
        ))}
      </ul>
    </div>
  );
}

// Color palette for passenger highlighting
const colors = [
  'red', 'green', 'blue', 'orange', 'purple', 'teal', 'brown', 'magenta', 'cyan', 'lime'
];


PassengerList.defaultProps = {
  passengers: []
};

const passengerCountStyle = {
  fontWeight: 'bold',
  fontSize: '1.2em',
  marginBottom: '0.5em'
};

const selectedCountStyle = {
  fontWeight: 'bold',
  fontSize: '1.1em',
  marginBottom: '0.5em'
};

export default PassengerList;

function ColoredText({ text, color }) {
  return <span style={{ color }}>{text}</span>;
}