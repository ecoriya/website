import DoctorCard from '../pages/DoctorCard';
import backgroundImg from '../assets/oip3.jpg'; // Make sure path is correct

export const doctorList = [
  {
    name: "Dr. N. Krishna Reddy",
    Education: "MD,DM",
    specialization: "Consultant,Cardiologist",
  },
  {
    name: "Dr. V. Vishwakranth Kumar",
    Education: "MBBS.MD(Gold Medal),DND(Cardiology)",
    specialization: "Consultant Cardiologist",
  },
  {
    name: "Dr. Deepthi",
    Education: "MD,DM",
    specialization: "Consultant Cardiologist",
  },
  {
    name: "Dr. Sanjib Sahu",
    Education: "MD,(Gen),Cardiology,FACC(USA),FESC",
    specialization: "Consultant Interventional Cardiologist",
  },
];

function Doctors() {
  return (
    <div style={styles.background}>
      <div style={{ padding: '2rem', paddingBottom: '20rem' }}>
        <h2 style={styles.heading}>Our Cardiologists</h2>
        <div style={styles.cardContainer}>
          {doctorList.map((doc, index) => (
            <DoctorCard key={index} doctor={doc} />
          ))}
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
  heading: {
    color: '#5DADE2',
    textAlign: 'center',
    marginBottom: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '1rem',
    borderRadius: '8px',
    display: 'inline-block',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
};

export default Doctors;
