import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#f5f5f5', padding: '30px 0', marginTop: 40 }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {/* About Shiva Hospital */}
        <div>
          <h3>About Shiva Hospital</h3>
          <ul>
            <li>Overview</li>
            <li>Achievements</li>
            <li>Awards</li>
            <li>Recognitions</li>
          </ul>
        </div>
        {/* Our Doctors */}
        <div>
          <h3>Our Doctors</h3>
          <ul>
            <li>Initiatives</li>
            <li>Student Experience</li>
          </ul>
        </div>
        {/* Patient Info */}
        <div>
          <h3>Patient Info</h3>
          <ul>
            <li>Processor Cost</li>
            <li>Know Your Diagnostics</li>
            <li>Diseases and Treatments</li>
            <li>Surgery Care</li>
          </ul>
        </div>
        {/* Education */}
        <div>
          <h3>Education</h3>
          <ul>
            <li>Introduction</li>
            <li>Medical Courses</li>
            <li>Paramedical Courses</li>
          </ul>
        </div>
        {/* Blog */}
        <div>
          <h3>Blog</h3>
          <ul>
            <li>For Patients</li>
            <li>For Doctors</li>
            <li>Health Tips</li>
            <li>Special Case Studies</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 30, color: '#888' }}>
        &copy; {new Date().getFullYear()} Shiva Hospital. All rights reserved.
      </div>
    </footer>
  );
}
