import React, { useState } from 'react';
import ServiceImage from '../assets/Servce.png'; 
import cardiologyimg from '../assets/Cardiology.jpg';

const altStyles = {
  container: {
    maxWidth: '1100px',
    margin: '3rem auto',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.07)',
    borderRadius: '16px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#2c3e50',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2980b9',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    fontSize: '1.125rem',
    fontWeight: '600',
    borderRadius: '30px',
    cursor: 'pointer',
    marginBottom: '2rem',
    boxShadow: '0 4px 10px rgba(41, 128, 185, 0.4)',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#1c5980',
  },
  textContainer: {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    maxWidth: '800px',
    margin: '0 auto 3rem',
  },
  heading: {
    fontSize: '2.4rem',
    fontWeight: '700',
    color: '#2980b9',
    marginBottom: '1.5rem',
    borderBottom: '3px solid #2980b9',
    paddingBottom: '0.3rem',
  },
  paragraph: {
    marginBottom: '1.4rem',
    fontWeight: '400',
    textAlign: 'justify',
  },
  strongText: {
    color: '#34495e',
    fontWeight: '600',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '14px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
    objectFit: 'cover',
    cursor: 'pointer',
    opacity: 0,
    transform: 'scale(0.5) rotate(-15deg)',
    animationFillMode: 'forwards',
  },
  imageAnimated: {
    animationName: 'imageOpen',
    animationDuration: '0.8s',
    animationTimingFunction: 'ease-out',
  },
};

// CSS keyframe animation as a string, to inject in a style tag
const animationStyle = `
@keyframes imageOpen {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-15deg);
    filter: hue-rotate(0deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1) rotate(10deg);
    filter: hue-rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    filter: hue-rotate(360deg);
  }
}
`;

const Service = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <>
      <style>{animationStyle}</style>
      <div style={altStyles.container}>
        <button 
          style={altStyles.button} 
          onClick={() => setShowImages(true)}
          disabled={showImages}
          aria-pressed={showImages}
        >
          {showImages ? "Viewing Services" : "View Services"}
        </button>

        <div style={altStyles.textContainer}>
          <h2 style={altStyles.heading}>SERVICES</h2>
          <p style={altStyles.paragraph}>
            <strong style={altStyles.strongText}>Unique Cardiovascular Disease Prevention and Management Programs:</strong> Special programs are being offered for patients with acute heart stroke (ACS Care program), acute and chronic heart failure (HF CareProgram), cardiac rehabilitation services (post-MI and post-cardiac surgery)(CardiacRehab Care), and Cardiovascular Disease Prevention (CVD Preventive Care). The programs are run by specially trained teams of medical, nursing, and allied (diet, exercise, behavior therapy, homecare etc) professionals. The teams offer services in pre-hospital, hospital, out-patient, and home settings on the concept of Care Continuum. The programs are professionally designed with protocols for guideline-based therapies to give best outcomes at least cost.
          </p>
          {/* Additional paragraphs can remain same */}
        </div>

        {showImages && (
          <div style={altStyles.imageContainer}>
            <img
              src={ServiceImage}
              alt="Cardiology service"
              style={{ ...altStyles.image, ...altStyles.imageAnimated }}
            />
            <img
              src={cardiologyimg}
              alt="Cardiology"
              style={{ ...altStyles.image, ...altStyles.imageAnimated }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Service;
