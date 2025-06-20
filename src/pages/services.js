import React from 'react';
import './service.css';

// Import your image, adjust path accordingly
import heartImage from '../assets/Servce.png'; // <-- put your actual image path here

const Service = () => {
  return (
    <div className="service-container">
      {/* Floating hearts */}
      <div className="floating-heart heart1">❤️</div>
      <div className="floating-heart heart2">💗</div>
      <div className="floating-heart heart3">💖</div>
      <div className="floating-heart heart4">💓</div>
      <div className="floating-heart heart5">❤️</div>
      <div className="floating-heart heart6">💗</div>
      <div className="floating-heart heart7">💖</div>
      <div className="floating-heart heart8">💓</div>

      <div className="service-content">
        <h1 className="service-title">Cardiovascular Disease Prevention and Management</h1>

        {/* First section: left aligned with image */}
        <section className="service-section left-aligned">
          <div className="text-content">
            <h2>Unique Cardiovascular Disease Prevention and Management Programs</h2>
            <p>
              Special programs are offered for patients with acute heart stroke (ACS Care program), acute and chronic heart failure (HF Care Program), cardiac rehabilitation services (post-MI and post-cardiac surgery) (CardiacRehab Care), and Cardiovascular Disease Prevention (CVD Preventive Care). These programs are run by specially trained teams of medical, nursing, and allied (diet, exercise, behavior therapy, homecare, etc.) professionals across pre-hospital, hospital, out-patient, and home settings under the Care Continuum concept.
            </p>
          </div>
          <div className="image-content">
            <img src={heartImage} alt="Cardiovascular Care" />
          </div>
        </section>

        {/* Other sections */}
        <section className="service-section">
          <h2>Remote Intensive Care Management through e-ICCU</h2>
          <p>
            To provide access to expert care even in remote locations, a unique e-ICCU technology platform is used to deliver round-the-clock expert cardiac and critical care services. This service supports clinicians, ambulance networks, and hospitals during the golden hour of emergency.
          </p>
        </section>

        <section className="service-section">
          <h2>Culture of Learning for High Safety and Quality</h2>
          <p>
            The Centre provides education & training in Cardiovascular Nursing, Critical Care Nursing, Post-MBBS Fellowship in Primary Cardiology, Cardiovascular Technician training, and DNB Fellowship in Cardiology. Regular CME and CNE programs are also conducted.
          </p>
        </section>

        <section className="service-section">
          <h2>Focus on Research</h2>
          <p>
            Advanced Electronic Medical Record systems and clinical databases are used to monitor quality, safety, and cost. Registries are maintained for conditions like ACS, heart failure, anticoagulant therapy, pacemakers, ICDs, PTCA, and CABG. Original and sponsored research is undertaken.
          </p>
        </section>

        <section className="service-section">
          <h2>Clinical Audit Systems</h2>
          <p>
            Clinical audits ensure the care provided adheres to evidence-based guidelines tailored to local conditions.
          </p>
        </section>

        <section className="service-section">
          <h2>Affordable Services</h2>
          <p>
            The Centre follows trust hospital objectives to provide affordable services without compromising quality. Essential care is not refused based on affordability.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Service;
