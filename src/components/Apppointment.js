import React, { useState } from 'react';

export default function Apppointment() {
  const [form, setForm] = useState({
    doctorname: '',
    specialization: '',
    appointmentDate: '',
    appointmentTime: '',
    location: '',
    patientName: '',
    patientContact: '',
    patientAge: '',
    gender: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace the URL with your backend endpoint
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setMessage('Appointment booked successfully!');
        setForm({
          doctorname: '',
          specialization: '',
          appointmentDate: '',
          appointmentTime: '',
          location: '',
          patientName: '',
          patientContact: '',
          patientAge: '',
          gender: ''
        });
      } else {
        setMessage('Failed to book appointment.');
      }
    } catch (error) {
      setMessage('Error booking appointment.');
    }
  };

  return (
    <div className="appointment-form-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Doctor Name:
          <input
            type="text"
            name="doctorname"
            value={form.doctorname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Specialization:
          <input
            type="text"
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Appointment Date:
          <input
            type="date"
            name="appointmentDate"
            value={form.appointmentDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Appointment Time:
          <input
            type="time"
            name="appointmentTime"
            value={form.appointmentTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Patient Contact:
          <input
            type="text"
            name="patientContact"
            value={form.patientContact}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Patient Age:
          <input
            type="number"
            name="patientAge"
            value={form.patientAge}
            onChange={handleChange}
            required
            min="0"
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button type="submit">Book Appointment</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
