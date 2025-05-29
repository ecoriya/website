import { useState } from 'react';
import axios from 'axios';
import { doctorList } from './Doctors';
import appoiment from '../assets/OIP.jpg'; // adjust path if needed

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

      // Reset form
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
    <div style={{ 
      backgroundImage: `url(${appoiment})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '700px',
        margin: 'auto',
        borderRadius: '10px',
        padding: '2rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ color: '#5DADE2', textAlign: 'center' }}>Book Your Appointment</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" style={styles.input} value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          <input type="number" placeholder="Age" style={styles.input} value={age} onChange={(e) => setAge(e.target.value)} required />
          <input type="tel" placeholder="Mobile Number" style={styles.input} value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          <input type="text" placeholder="Address" style={styles.input} value={address} onChange={(e) => setAddress(e.target.value)} />
          
          <select style={styles.input} value={state} onChange={(e) => setState(e.target.value)}>
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

          <select style={styles.input} value={preferredDoctor} onChange={(e) => setPreferredDoctor(e.target.value)} required>
            <option value="">Select Preferred Doctor</option>
            {doctorList.map((doc, index) => (
              <option key={index} value={doc.name}>{doc.name}</option>
            ))}
          </select>

          <input type="tel" placeholder="Another Relative Phone (Optional)" style={styles.input} value={relativePhone} onChange={(e) => setRelativePhone(e.target.value)} />

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  input: {
    display: 'block',
    width: '100%',
    margin: '1rem 0',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
  },
  label: {
    marginTop: '1rem',
    display: 'block',
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#5DADE2',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '6px',
    marginTop: '1rem',
    width: '100%',
  },
};

export default BookAppointment;
