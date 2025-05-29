// ✅ All imports go at the top
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; 
import Doctors from './pages/Doctors';
import Service from './pages/services';
import BookAppointment from './pages/BookAppointment';
import HCSApp from './pages/HCSAPP';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <header style={styles.navbar}>
        <h1 style={styles.logo}>TRUST CARE</h1>
        <nav>
          <ul style={styles.navList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/hcsapp">HCS App</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<BookAppointment />} />
        <Route path="/services" element={<Service />} />
        <Route path="/hcsapp" element={<HCSApp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

     <footer style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  padding: '0.8rem 1rem', 
 backgroundColor: '#add8e6',
  fontSize:'1rem'
}}>
  <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <h3 style={{ marginBottom: '0.5rem' }}>Navigation</h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li style={{ marginBottom: '0.5rem' }}><Link to="/">Home</Link></li>
      <li style={{ marginBottom: '0.5rem' }}><Link to="/doctors">Doctors</Link></li>
      <li style={{ marginBottom: '0.5rem' }}><Link to="/services">Services</Link></li>
      <li style={{ marginBottom: '0.5rem' }}><Link to="/appointment">Book Appointment</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>

  <div style={{ maxWidth: '50%', lineHeight: '1.6' }}>
    <p>Contact: trustcare@example.com | Phone: 123-456-7890</p>
    <p>Address: Durgabai Deshmukh Hospital, Andhra Mahila Sabha, Vidyanagar, Hyderabad - 500044</p>
    <p>Phone: +91-7995003299, +91-9848033230</p>
    <p>Email: info@healthcareservices.co.in</p>
  </div>

  <div style={{ alignSelf: 'flex-end', marginLeft: '1rem' }}>
    <p>© 2025 TRUST CARE Hospital</p>
  </div>
</footer>


    </Router>
  );
}

// ✅ Define styles before export
const styles = {
  navbar: {
   backgroundColor: '#add8e6',
   color: '#0000FF' ,
   fontSize:'1.25rem',
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
  },
  footer: {
    backgroundColor: '#fbecec',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '3rem',
  }
};

// ✅ Default export
export default App;
