import React from 'react';
import ServiceImage from '../assets/Servce.png'; 
import cardiologyimg from '../assets/Cardiology.jpg'
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '2rem',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
  },
  textContainer: {
    flex: '1 1 500px',
    color: '#34495E',
    fontSize: '1.50rem',
    lineHeight: '1.6',
  },
  heading: {
    color: '#5DADE2', // light blue
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  paragraph: {
    marginBottom: '1.2rem',
  },
  imageContainer: {
    flex: '1 1 400px',
    textAlign: 'flex start',
    gap:'1.5rem',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height:'500px',
    gap:'0.5rem',
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

const Service = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>SERVICES</h2>
        <p style={styles.paragraph}>
          <strong>Unique Cardiovascular Disease Prevention and Management Programs:</strong> Special programs are being offered for patients with acute heart stroke (ACS Care program), acute and chronic heart failure (HF CareProgram), cardiac rehabilitation services (post-MI and post-cardiac surgery)(CardiacRehab Care), and Cardiovascular Disease Prevention (CVD Preventive Care). The programs are run by specially trained teams of medical, nursing, and allied (diet, exercise, behavior therapy, homecare etc) professionals. The teams offer services in pre-hospital, hospital, out-patient, and home settings on the concept of Care Continuum. The programs are professionally designed with protocols for guideline-based therapies to give best outcomes at least cost.
        </p>
        <p style={styles.paragraph}>
          <strong>Remote Intensive Care Management through e-ICCU technology platform to provide wider access:</strong> Patients with many acute illnesses reach nearest facilities, where concerned expertise may not be immediately available. Correct treatment during first one hour of an emergency illness saves many lives. A unique program of providing expert cardiac and critical care services round the clock using e-ICCU technology platform, is being offered to clinicians, ambulance networks, small & big hospitals.
        </p>
        <p style={styles.paragraph}>
          <strong>Culture of Learning ensures high Safety and Quality:</strong> The Centre offers education & training programs in Cardiovascular Nursing, Critical Care Nursing, Post-MBBS Fellowship in Primary Cardiology, Cardiovascular Technician, and DNB Fellowship in Cardiology. It will conduct regular continuing medical and nursing education (CME and CNE) programs for general practitioners, specialists, post-graduates, nurses, and technicians.
        </p>
        <p style={styles.paragraph}>
          <strong>Focus on Research:</strong> The Centre is implementing advanced Electronic Medical Record system with well-designed clinical database system. Meticulous data collection of every patient and its analysis provide a continuous monitoring system for quality, safety, and cost for various cardiac conditions. The Centre maintains various registries for acute coronary syndromes, heart failure, anticoagulant therapy, pacemaker & ICD devices, PTCA, CABG etc. The Centre undertakes original research and sponsored research for drugs and devices.
        </p>
        <p style={styles.paragraph}>
          <strong>Clinical Audit Systems:</strong> These are designed to ensure that appropriate care is provided as per evidence-based guidelines, modified to local conditions.
        </p>
        <p>
          <strong>Affordable services:</strong> Tariffs are designed keeping in mind the trust hospital objectives to make the services affordable to many people. They are significantly lower compared to many hospitals providing similar quality services. The motto is not to refuse essential care for those who cannot afford.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img 
          src={ServiceImage} 
          alt="Cardiology service" 
          style={styles.image} 
        />
        <img 
          src={ cardiologyimg} 
          alt="Cardiology" 
          style={styles.image} 
        />
      </div>
    </div>
  );
};

export default Service;
