import React from 'react';
import { motion } from 'framer-motion';
import cardiacImage from '../assets/cardiac-center.jpg';
import backgroundImg from '../assets/heartkr.jpg';

function About() {
  return (
    <div style={{ ...styles.background }}>
      <div className="animatedOverlay" />
      <div style={styles.overlay}>
        <div style={styles.container}>
          <motion.div
            style={styles.contentWrapper}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              style={styles.textContainer}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                style={styles.heading}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                Welcome to Care Cardiac Center
              </motion.h2>
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
            </motion.div>

            {/* 🟦 Sparkle Image */}
            <motion.img
              src={cardiacImage}
              alt="Cardiac Center"
              style={styles.image}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                boxShadow: [
                  '0 0 0 rgba(0,0,0,0)',
                  '0 0 20px rgba(173, 216, 230, 0.8)',
                  '0 0 10px rgba(173, 216, 230, 0.4)',
                  '0 0 0 rgba(0,0,0,0)',
                ],
              }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ✅ Styles
const styles = {
  background: {
    position: 'relative',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    minHeight: '100vh',
    padding: '2rem 0',
    position: 'relative',
    zIndex: 2,
  },
 container: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem', // ↓ Reduce this if too large
  marginTop: '0rem',     // 👈 Ensure this is small
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
    fontSize: '3rem',
    color: 'blue',
    marginBottom: '1rem',
    textShadow: '1px 1px 2px lightblue',
  },
  text: {
    fontSize: '1.50rem',
    color: '#333',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
  image: {
    flex: '7',
    maxWidth: '400px',
    borderRadius: '5px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  },
};

export default About;
