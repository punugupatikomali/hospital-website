import React, { useState } from 'react';

const specializations = [
  { name: 'Dermatology', doctors: ['Dr. Smith', 'Dr. Patel', 'Dr. Lee', 'Dr. Brown'] },
  { name: 'Pediatrics', doctors: ['Dr. Green', 'Dr. White', 'Dr. Black', 'Dr. Young'] },
  { name: 'Cardiology', doctors: ['Dr. Adams', 'Dr. Clark', 'Dr. Lewis', 'Dr. Walker'] },
  { name: 'Neurology', doctors: ['Dr. Hall', 'Dr. Allen', 'Dr. Wright', 'Dr. King'] },
  { name: 'Orthopedics', doctors: ['Dr. Scott', 'Dr. Turner', 'Dr. Hill', 'Dr. Baker'] },
  { name: 'Gynecology', doctors: ['Dr. Harris', 'Dr. Nelson', 'Dr. Carter', 'Dr. Mitchell'] },
  { name: 'Ophthalmology', doctors: ['Dr. Perez', 'Dr. Roberts', 'Dr. Evans', 'Dr. Edwards'] },
  { name: 'ENT', doctors: ['Dr. Collins', 'Dr. Stewart', 'Dr. Sanchez', 'Dr. Morris'] },
  { name: 'Psychiatry', doctors: ['Dr. Rogers', 'Dr. Reed', 'Dr. Cook', 'Dr. Morgan'] },
  { name: 'Urology', doctors: ['Dr. Bell', 'Dr. Murphy', 'Dr. Bailey', 'Dr. Rivera'] },
];

export default function Services() {
  const [selected, setSelected] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const now = new Date();
  const currentDateTime = now.toLocaleString();
  const today = now.toISOString().split('T')[0];

  const handleBook = () => {
    if (!appointmentDate) {
      alert('Please select an appointment date.');
      return;
    }
    setConfirmation(
      `Appointment booked with ${selectedDoctor} (${specializations[selected].name}) on ${appointmentDate}.`
    );
    setSelectedDoctor(null);
    setAppointmentDate('');
  };

  return (
    <div>
      <h2>Specializations</h2>
      <ul>
        {specializations.map((spec, idx) => (
          <li
            key={spec.name}
            style={{ cursor: 'pointer', color: selected === idx ? 'blue' : 'black', marginBottom: 8 }}
            onClick={() => {
              setSelected(idx);
              setSelectedDoctor(null);
              setConfirmation('');
            }}
          >
            {spec.name}
          </li>
        ))}
      </ul>
      {selected !== null && !selectedDoctor && (
        <div>
          <h3>Doctors in {specializations[selected].name}</h3>
          <ul>
            {specializations[selected].doctors.map(doc => (
              <li
                key={doc}
                style={{ cursor: 'pointer', color: 'green', marginBottom: 6 }}
                onClick={() => {
                  setSelectedDoctor(doc);
                  setConfirmation('');
                }}
              >
                {doc}
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedDoctor && (
        <div style={{ marginTop: 20 }}>
          <h3>Book Appointment with {selectedDoctor}</h3>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleBook();
            }}
          >
            <div>
              <label>
                Booking Date & Time:&nbsp;
                <input type="text" value={currentDateTime} readOnly />
              </label>
            </div>
            <div style={{ marginTop: 10 }}>
              <label>
                Appointment Date:&nbsp;
                <input
                  type="date"
                  min={today}
                  value={appointmentDate}
                  onChange={e => setAppointmentDate(e.target.value)}
                  required
                />
              </label>
            </div>
            <button type="submit" style={{ marginTop: 15 }}>Book Appointment</button>
          </form>
        </div>
      )}
      {confirmation && (
        <div style={{ marginTop: 20, color: 'blue' }}>
          {confirmation}
        </div>
      )}
    </div>
  )
}
