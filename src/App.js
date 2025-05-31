// ✅ All imports go at the top
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About'; 
import Service from './pages/services';
import Doctors from './pages/Doctors';
import BookAppointment from './pages/BookAppointment';
import HCSApp from './pages/HCSAPP';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
         <Route path="/services" element={<PageWrapper><Service /></PageWrapper>} />
        <Route path="/doctors" element={<PageWrapper><Doctors /></PageWrapper>} />
        <Route path="/appointment" element={<PageWrapper><BookAppointment /></PageWrapper>} />
        <Route path="/hcsapp" element={<PageWrapper><HCSApp /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

// 🔁 Reusable animation wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <header style={styles.navbar}>
        <h1 style={styles.logo}>TRUST CARE</h1>
        <nav>
          <ul style={styles.navList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/hcsapp">HCS App</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <AnimatedRoutes />

      <footer style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'flex-start',
  padding: '0.5rem 1rem', 
  backgroundColor: '#add8e6',
  fontSize: '0.85rem',
  flexWrap: 'wrap',
  gap: '1rem'
}}>
  <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>Navigation</h4>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '1.4' }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/doctors">Doctors</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/appointment">Book Appointment</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>

  <div style={{ maxWidth: '50%', lineHeight: '1.4' }}>
    <p>Contact: trustcare@example.com | Phone: 123-456-7890</p>
    <p>Address: Durgabai Deshmukh Hospital, Vidyanagar, Hyderabad - 500044</p>
    <p>Phone: +91-7995003299, +91-9848033230</p>
    <p>Email: info@healthcareservices.co.in</p>
  </div>

  <div style={{ alignSelf: 'flex-end', fontSize: '0.8rem' }}>
    <p>© 2025 TRUST CARE Hospital</p>
  </div>
</footer>

    </Router>
  );
}

// ✅ Define styles before export
const styles = {
  navbar: {
    backgroundColor: '#87CEFA',
    color: '#0000FF',
    fontSize: '1.25rem',
    padding: '0.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
  }
};

export default App;
