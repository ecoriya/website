import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../assets/cardiology1.jpg';
import image2 from '../assets/cardiology2.png';
import image3 from '../assets/cardiology3.png';

const backgroundImages = [image1, image2, image3];

function Home() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
<div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', height: '900px', marginBottom: '3rem' }}>


        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1 }}
            style={{
              ...styles.hero,
              backgroundImage: `url(${backgroundImages[currentImage]})`,
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              zIndex: -1,
              filter: 'blur(5px) brightness(0.7)',

            }}
          />
        </AnimatePresence>

        <section style={{ position: 'relative', zIndex: 1, padding: '3rem 2rem' }}>
          <motion.h2
            style={styles.heading}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to TRUST CARE Cardiology
          </motion.h2>

          <motion.p
            style={styles.subheading}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your heart deserves more than just treatment — it deserves <strong>specialist care</strong>.
          </motion.p>

          <motion.p
            style={styles.text}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            At <strong>TRUST CARE</strong>, we combine compassion with the latest technology to offer the most reliable cardiac care.
          </motion.p>

         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <motion.button
    style={styles.button}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.5 }}
    onClick={() => navigate('/appointment')}
  >
    Book Your Appointment
  </motion.button>
</div>


          <motion.p
            style={styles.emergency}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            🏥 Emergency Cardiac Services available 24/7
          </motion.p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    padding: '3rem 2rem',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    fontSize: '1.50rem',
    textAlign: 'center',
    borderRadius: '12px',
    marginBottom: '2rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },

  heading: {
    fontSize: '3rem',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white', // Softer blue than primary
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '3rem',
    fontWeight: '600',
     textAlign: 'center',
    marginBottom: '1.2rem',
    color: 'white', // Calm deep blue
  },
  text: {
    fontSize: '2rem',
    lineHeight: '1.7',
    color: 'white',
    
    marginBottom: '1.8rem',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: '#5DADE2', // Light-medium blue
    color: '#fff',
    
    border: 'none',
    padding: '0.8rem 1.6rem',
    fontSize: '2rem',
    cursor: 'pointer',
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  emergency: {
    fontSize: '1.50rem',
    color: 'white', // Grey-blue
    marginTop: '0.5rem',
  },
};

export default Home;
