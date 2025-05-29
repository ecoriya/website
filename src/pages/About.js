import React from 'react';
import cardiacImage from '../assets/cardiac-center.jpg';
import backgroundImg from '../assets/heartkr.jpg'; // <-- Add background image

function About() {
  return (
    <div style={{ ...styles.background }}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <div style={styles.contentWrapper}>
            <div style={styles.textContainer}>
              <h2 style={styles.heading}>Welcome to Care Cardiac Center</h2>
              <p style={styles.text}>
                <strong>The Legacy:</strong> Durgabhai Deshmukh Hospital was the pioneer in modern cardiac services. It has the
                credit of performing the first open heart surgery in the combined state of Andhra Pradesh. It is also reputed
                for education and training programs.
              </p>
              <p style={styles.text}>
                <strong>Medical Ethics-driven, experienced Professional Teams:</strong> Comprehensive Cardiac services have been
                fully recommissioned from 1st January 2018 by a team led by Dr. N. Krishna Reddy, Senior Cardiologist and
                Co-founder of Care group of Hospitals.
              </p>
              <p style={styles.text}>
                The Cardiology & Critical Care team consists of 4 PGDCC registrars, 4 critical care registrars, 2 full-time
                cardiologists, 6 visiting cardiologists, including Pacing & Electrophysiology specialists for rhythm disorder
                management, Pediatric specialists, and Heart Failure specialists.
              </p>
              <p style={styles.text}>
                The Cardiac surgery team consists of one full-time cardiac surgeon and 3 visiting cardiac surgeons with
                expertise in pediatric, coronary, valvular, and aortic disorders.
              </p>
            </div>
            <img src={cardiacImage} alt="Cardiac Center" style={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // White overlay for readability
    minHeight: '100vh',
    padding: '2rem 0',
  },
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  contentWrapper: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: '1',
    minWidth: '300px',
  },
  heading: {
    fontSize: '2rem',
    color: '#5DADE2',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#333',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
  image: {
    flex: '1',
    maxWidth: '400px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
};

export default About;
