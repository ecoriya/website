import React from 'react';
import { motion } from 'framer-motion';
import DoctorCard from '../pages/DoctorCard';

export const doctorList = [
  {
    name: "Dr. N. Krishna Reddy",
    Education: "MD,DM",
    specialization: "Consultant, Cardiologist",
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
  {
    name: "Dr. Shivrama Krishna",
    Education: "MD,DM ",
    specialization: "Cardiologist",
  },
 
  {
    name: "Dr.SunainaGatham",
    Education: "MBBS,DA,DND",
    specialization: "Consultant Anaesthesiologist",
  },
  {
    name: "Dr.K.V.Rajasekhara Rao",
    Education: "M.CH.(CTVS)FIACS",
    specialization: "Consultant Cardiothoracic&Vascular Surgeon",
  },
   {
    name: "Dr.G.Usha Rani",
    Education: "MS.M.CH",
    specialization: "Senior Consultant Cardiothoracic Surgeon",
  },
  {
    name: "Dr.Babu T.Muntimadugu",
    Education: "M.CH DNB(CT)FRCS",
    specialization: "Consultant Cardiothoracic&Vascular Surgeon",
  },
  {
    name: "Dr.CH.Sai Amrut Sagar",
    Education: "MBBS,DND(CTVS)",
    specialization: "Cardio Thoracic Surgeon",
  },
];

function Doctors() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={styles.wrapper}
    >
      {/* Animated background */}
      <motion.div
        style={styles.animatedBackground}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.content}
      >
        <motion.h2
          style={styles.heading}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Our Cardiologists
        </motion.h2>

        <div style={styles.cardContainer}>
          {doctorList.map((doc, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <DoctorCard doctor={doc} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  animatedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    background: 'linear-gradient(-45deg, #FFDEE9, #B5FFFC, #ECFFFB, #FEE3EC)',
    backgroundSize: '400% 400%',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    padding: '2rem',
    paddingBottom: '20rem',
  },
  heading: {
    color: '#EC407A',
    textAlign: 'center',
    marginBottom: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '1rem 2rem',
    borderRadius: '12px',
    display: 'inline-block',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    paddingTop: '1rem',
  },
};

export default Doctors;
