import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Specialists() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/docdata/all')
      .then(res => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error loading data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading specialists...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Our Specialists</h2>
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
  )
}
