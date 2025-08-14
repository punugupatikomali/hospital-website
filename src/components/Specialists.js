import React, { useState } from 'react';
import axios from 'axios';

const specialistsList = [
  'Dermatology',
  'Cardiology',
  'General Medicine',
  'Gynaecology',
  'ENT',
  'Physiotherapy',
  'Neurology',
  'Urology',
  'Plastic Surgery'
];

export default function Specialists() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDoctors = async (specialization) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`http://localhost:8080/docdata/all/${specialization}`);
      setDoctors(res.data);
    } catch (err) {
      setError('Error loading data');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Our Specialists</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
        {specialistsList.map((spec) => (
          <button
            key={spec}
            onClick={() => fetchDoctors(spec)}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%)',
              color: '#fff',
              fontWeight: 500,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(58, 123, 213, 0.08)'
            }}
          >
            {spec}
          </button>
        ))}
      </div>
      {loading && <div>Loading specialists...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
        {doctors.map((doctor) => (
          <div
            key={doctor.sno}
            style={{
              padding: '16px 24px',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%)',
              color: '#fff',
              fontWeight: 500,
              fontSize: '1rem',
              boxShadow: '0 2px 8px rgba(58, 123, 213, 0.08)',
              minWidth: '220px'
            }}
          >
            <div><strong>{doctor.doctorname}</strong></div>
            <div>{doctor.specialization}</div>
            <div>
              {doctor.startTime && doctor.endTime &&
                <span>
                  Timings: {doctor.startTime} - {doctor.endTime}
                </span>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}