import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion'
import backgroundImage from '../assets/cardiology1.jpg';


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section style={styles.hero}>
        <div style={{ padding: '1rem', paddingBottom: '1rem' }}></div>

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
          At <strong>TRUST CARE</strong>, we combine compassion with the latest technology to offer the most reliable cardiac care. From preventive checkups to advanced surgeries, our experienced specialists are here for every beat of your life.
        </motion.p>

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
  );
}


const styles = {
 hero: {
  padding: '3rem 2rem',
  background: ` url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
   fontSize:'1.50rem',
  textAlign: 'center',
  borderRadius: '12px',
  marginBottom: '2rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
},

  heading: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: 'blue', // Softer blue than primary
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.50rem',
    fontWeight: '600',
    marginBottom: '1.2rem',
    color: '#3B5998', // Calm deep blue
  },
  text: {
    fontSize: '1.50rem',
    lineHeight: '1.7',
    color: '#34495E',
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
    color: '#5D6D7E', // Grey-blue
    marginTop: '0.5rem',
  },
  infoBoxes: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '2rem',
    gap: '1rem',
  },
  box: {
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderRadius: '10px',
    padding: '1.50rem',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
  },
  boxTitle: {
    fontSize: '1.50rem',
    color: '#2E86C1', // Matches heading
    marginBottom: '0.75rem',
  },
};

export default Home;
