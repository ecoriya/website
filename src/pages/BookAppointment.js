import { useState } from 'react';
import axios from 'axios';
import { doctorList } from './Doctors';
import { motion } from 'framer-motion';
import stethoscope from '../assets/stethoscope4.png';
import heart from '../assets/heart2.png';
import syringe from '../assets/syringe2.png';

function BookAppointment() {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [preferredDoctor, setPreferredDoctor] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [relativePhone, setRelativePhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !age || !mobile || !appointmentDate || !preferredDoctor) {
      alert('Please fill in all required fields');
      return;
    }

    const formData = {
      name: fullName,
      age,
      mobile,
      address,
      state,
      pincode,
      history: medicalHistory,
      symptoms,
      appointmentDate,
      preferredDoctor,
      relativePhone,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/appointments/book', formData);
      alert(response.data.message);
      setFullName('');
      setAge('');
      setMobile('');
      setAddress('');
      setState('');
      setPincode('');
      setMedicalHistory('');
      setSymptoms('');
      setAppointmentDate('');
      setPreferredDoctor('');
      setRelativePhone('');
    } catch (error) {
      alert('Failed to book appointment: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={styles.wrapper}
    >
      {/* Background Floating Images */}
      <div style={styles.bgWrapper}>
        <motion.img
          src={stethoscope}
          alt="stethoscope"
          style={styles.bgImage1}
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.img
          src={heart}
          alt="heart"
          style={styles.bgImage2}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.img
          src={syringe}
          alt="syringe"
          style={styles.bgImage3}
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 14 }}
        />
      </div>

      <div style={styles.container}>
        <h2 style={styles.title}>Book Your Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" style={styles.input} value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input type="number" placeholder="Age" style={styles.input} value={age} onChange={(e) => setAge(e.target.value)} required />
          <input type="tel" placeholder="Mobile Number" style={styles.input} value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          <input type="text" placeholder="Address" style={styles.input} value={address} onChange={(e) => setAddress(e.target.value)} />

          <select style={styles.select} value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>

          <input type="text" placeholder="Pincode" style={styles.input} value={pincode} onChange={(e) => setPincode(e.target.value)} />
          <textarea placeholder="Previous Medical History" style={{ ...styles.input, height: '100px' }} value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} />
          <input type="text" placeholder="Symptoms" style={styles.input} value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />

          <label style={styles.label}>Select Appointment Date</label>
          <input type="date" style={styles.input} onChange={(e) => {
            const date = e.target.value;
            const time = appointmentDate.split(' ')[1] || '09:00';
            setAppointmentDate(`${date} ${time}`);
          }} value={appointmentDate ? appointmentDate.split(' ')[0] : ''} required />

          <label style={styles.label}>Select Appointment Time</label>
          <input type="time" style={styles.input} onChange={(e) => {
            const time = e.target.value;
            const date = appointmentDate.split(' ')[0] || '2025-01-01';
            setAppointmentDate(`${date} ${time}`);
          }} value={appointmentDate ? appointmentDate.split(' ')[1] : ''} required />

          <select style={styles.select} value={preferredDoctor} onChange={(e) => setPreferredDoctor(e.target.value)} required>
            <option value="">Select Preferred Doctor</option>
            {doctorList.map((doc, index) => (
              <option key={index} value={doc.name}>{doc.name}</option>
            ))}
          </select>

          <input type="tel" placeholder="Another Relative Phone (Optional)" style={styles.input} value={relativePhone} onChange={(e) => setRelativePhone(e.target.value)} />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={styles.button}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: '#f8f9fc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  },
  bgWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
  },
  bgImage1: {
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: '70px',
    opacity: 0.08,
  },
  bgImage2: {
    position: 'absolute',
    top: '35%',
    left: '80%',
    width: '60px',
    opacity: 0.08,
  },
  bgImage3: {
    position: 'absolute',
    top: '70%',
    left: '25%',
    width: '80px',
    opacity: 0.08,
  },
  container: {
    background: '#fff',
    borderRadius: '16px',
    padding: '2rem',
    width: '100%',
    maxWidth: '700px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#3498DB',
    marginBottom: '2rem',
    fontWeight: '600',
    fontSize: '1.75rem',
  },
  input: {
    width: '100%',
    margin: '0.8rem 0',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: "'Poppins', sans-serif",
  },
  select: {
    width: '100%',
    margin: '0.8rem 0',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: '#fff',
    fontFamily: "'Poppins', sans-serif",
  },
  label: {
    marginTop: '1rem',
    fontWeight: '500',
    display: 'block',
    color: '#333',
  },
  button: {
    backgroundColor: '#3498DB',
    color: '#fff',
    border: 'none',
    padding: '0.85rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '8px',
    width: '100%',
    marginTop: '1.2rem',
    transition: 'all 0.3s ease',
  },
};

export default BookAppointment;
