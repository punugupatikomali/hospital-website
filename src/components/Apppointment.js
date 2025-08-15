import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../appointment.css';

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

  const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fetch all doctors on mount
  useEffect(() => {
    async function fetchDoctors() {
      try {
        const res = await axios.get('http://localhost:8080/docdata/all');
        setDoctors(res.data);
      } catch (error) {
        setDoctors([]);
      }
    }
    fetchDoctors();
  }, []);

  // Handle doctor selection and auto-fill specialization
  const handleDoctorChange = (e) => {
    const selectedDoctorName = e.target.value;
    const selectedDoctor = doctors.find(doc => doc.doctorname === selectedDoctorName);
    setForm({
      ...form,
      doctorname: selectedDoctorName,
      specialization: selectedDoctor ? selectedDoctor.specialization : ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Validation helpers
  const isFutureDateTime = () => {
    if (!form.appointmentDate || !form.appointmentTime) return false;
    const selected = new Date(`${form.appointmentDate}T${form.appointmentTime}`);
    return selected > new Date();
  };

  const isValidTime = () => {
    if (!form.appointmentTime) return false;
    const [hour] = form.appointmentTime.split(':').map(Number);
    return hour >= 8 && hour < 23;
  };

  const isSlotAvailable = async () => {
  try {
    const res = await axios.get(`http://localhost:8080/appointmentdata/all/${form.doctorname}`);
    const appointments = res.data;
    // Check for overlap using filter
    console.log(appointments);
    console.log(form.appointmentDate, form.appointmentTime);
      
    const overlapping = appointments.filter(app =>
      app.appointmentDate === form.appointmentDate &&
      app.appointmentTime === form.appointmentTime
    );
    return overlapping.length === 0; // true if no overlap, false if overlap exists
  } catch {
    return true; // If error, allow booking
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    // 1. Date/time must be in future
    if (!isFutureDateTime()) {
      setError('Appointment date and time must be in the future.');
      return;
    }

    // 2. Time must be between 8 a.m. and 11 p.m.
    if (!isValidTime()) {
      setError('Appointment time must be between 8:00 a.m. and 11:00 p.m.');
      return;
    }

    // 3. Check slot availability
    const available = await isSlotAvailable();
    if (!available) {
      setError('Selected slot is already booked for this doctor. Please choose another time.');
      return;
    }

    console.log('Submitting:', form);

    // If all validations pass, submit
    try {
      const response = await fetch('http://localhost:8080/appointmentdata/add', {
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
        setError('Failed to book appointment.');
      }
    } catch (error) {
      setError('Error booking appointment.');
    }
  };

  return (
    <div className="appointment-form-container">
      <h2 className="appointment-heading">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-row">
          <label>Doctor Name:</label>
          {/* {console.log(form.doctorname)} */}
          <select
            name="doctorname"
            value={form.doctorname}
            onChange={handleDoctorChange}
            required
            className="form-input"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.doctorname} value={doc.doctorname}>
                {doc.doctorname} - {doc.specialization}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label>Specialization:</label>
          <input
            type="text"
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            required
            className="form-input"
            readOnly
          />
        </div>
        <div className="form-row">
          <label>Appointment Date:</label>
          <input
            type="date"
            name="appointmentDate"
            value={form.appointmentDate}
            onChange={handleChange}
            required
            className="form-input"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        <div className="form-row">
          <label>Appointment Time:</label>
          <input
            type="time"
            name="appointmentTime"
            value={form.appointmentTime}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label>Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label>Patient Contact:</label>
          <input
            type="text"
            name="patientContact"
            value={form.patientContact}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label>Patient Age:</label>
          <input
            type="number"
            name="patientAge"
            value={form.patientAge}
            onChange={handleChange}
            required
            min="0"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label>Gender:</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="appointment-btn">Book Appointment</button>
      </form>
      {error && <p className="appointment-message" style={{ color: 'red' }}>{error}</p>}
      {message && <p className="appointment-message">{message}</p>}
    </div>
  );
}