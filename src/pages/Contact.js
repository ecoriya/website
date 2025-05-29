import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📞 Contact Information</h2>
      <p style={styles.text}>
        For appointments, emergencies, or general inquiries, feel free to reach out to us.
      </p>

      <div style={styles.infoBox}>
        <p><strong>🏥 Hospital:</strong> Durgabai Deshmukh Hospital, Vidyanagar, Hyderabad - 500044</p>
        <p><strong>📱 Phone:</strong> +91-7995003299, +91-9848033230</p>
        <p><strong>📧 Email:</strong> info@healthcareservices.co.in</p>
        <p><strong>⏰ Hours:</strong> Open 24/7 for emergencies | Outpatient: Mon–Sat, 9 AM – 6 PM</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    background: '#fff6f6',
    borderRadius: '10px',
    margin: '2rem auto',
    maxWidth: '800px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  heading: {
    color: '#5DADE2',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    lineHeight: '1.8',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
};

export default Contact;
