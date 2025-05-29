// src/components/DoctorCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const { name, Education, specialization } = doctor;

  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <p><strong>Specialization:</strong> {specialization}</p>
      <p><strong>Education:</strong> {Education}</p>
      <Link to="/appointment">
        <button style={styles.button}>Book Appointment</button>
      </Link>
    </div>
  );
};

const styles = {
card: {
  border: '1px solid #ddd',
  padding: '2rem',
  borderRadius: '10px',
  fontSize: '1.50rem',
  marginBottom: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // slight transparency
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  flex: '1 1 250px',
  maxWidth: '500px',
},


  name: {
   color: '#5DADE2',
  },
  
  button: {
    marginTop: '1rem',
    backgroundColor: '#5DADE2',
    fontSize:'1.50rem',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default DoctorCard;
