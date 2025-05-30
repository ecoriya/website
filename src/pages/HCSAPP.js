import React, { useEffect, useState } from 'react';

const HCSApp = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const urls = {
    pci: 'https://pci-registry.com/',
    misPci: 'http://mis.pci-registry.com/',
    preventCvd: 'http://cvd.healthcareservices.co.in/',
    stemiCare: 'https://stemi.healthcareservices.co.in/',
    hfCare: 'http://ww3.hfprogram.org/?subid1=a1f6eefc-321d-11f0-b054-6ec1b00031a9',
    ckd: 'https://www.ckd.healthcareservices.co.in/',
    teleEcg: 'http://teleecg.healthcareservices.co.in/',
    eIcu: 'https://eicu.healthcareservices.co.in/',
    pacs: 'http://202.143.96.52/iWeb/Login.aspx?ReturnUrl=%2fiWeb%2fPages%2fHome.aspx',
    patientPortal: 'https://example.com/patient-portal',
    homecare: 'http://homecare.healthcareservices.co.in/',
    hospitalInfoSystem: 'http://cims.healthcareservices.co.in/',
    iClinicPlus: 'http://iclinic.healthcareservices.co.in/',
    quality: 'https://healthcareservices.co.in/Home/HcsApp#',
    mis: 'https://healthcareservices.co.in/Home/HcsApp#',
    emr: 'http://emr.healthcareservices.co.in/',
    doctorAppointment: 'https://appointments.healthcareservices.co.in/',
    hcsMail: 'https://healthcareservices.co.in/Home/HcsApp#',
    kms: 'http://kms.healthcareservices.co.in/',
  };

  const boxStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.25rem',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.6s ease, opacity 0.6s ease',
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(40px)',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    width: '100%',
    marginBottom: '2rem',
    color: '#2c3e50',
    animation: animate ? 'fadeIn 1.2s ease-out forwards' : 'none',
    opacity: 0,
  };

  const ulStyle = { listStyle: 'none', padding: 0 };

  const linkStyle = {
    textDecoration: 'none',
    color: '#2980b9',
    fontWeight: '500',
    display: 'block',
    padding: '0.5rem 0',
    transition: 'all 0.4s ease',
  };

  const linkHoverStyle = `
    a:hover {
      color: #e67e22;
      transform: translateX(5px);
      font-weight: 600;
    }
  `;

  const animationKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <>
      <style>
        {linkHoverStyle}
        {animationKeyframes}
      </style>

      <div style={{ display: 'flex', gap: '3rem', padding: '2rem 4rem', flexWrap: 'wrap', background: '#f6f9fc' }}>
        <h1 style={headingStyle}>HCS APPS</h1>

        {/* Box 1 */}
        <div style={boxStyle}>
          <h2 style={{ marginBottom: '1rem', color: '#34495e' }}>Disease Management Programs</h2>
          <ul style={ulStyle}>
            <li><a href={urls.pci} target="_blank" rel="noreferrer" style={linkStyle}>PCI</a></li>
            <li><a href={urls.misPci} target="_blank" rel="noreferrer" style={linkStyle}>MIS-PCI</a></li>
            <li><a href={urls.preventCvd} target="_blank" rel="noreferrer" style={linkStyle}>PREVENT -CVD</a></li>
            <li><a href={urls.stemiCare} target="_blank" rel="noreferrer" style={linkStyle}>STEMI CARE</a></li>
            <li><a href={urls.hfCare} target="_blank" rel="noreferrer" style={linkStyle}>HF CARE</a></li>
            <li><a href={urls.ckd} target="_blank" rel="noreferrer" style={linkStyle}>CKD</a></li>
          </ul>
        </div>

        {/* Box 2 */}
        <div style={boxStyle}>
          <h2 style={{ marginBottom: '1rem', color: '#34495e' }}>Tele Medicine</h2>
          <ul style={ulStyle}>
            <li><a href={urls.teleEcg} target="_blank" rel="noreferrer" style={linkStyle}>TELE-ECG</a></li>
            <li><a href={urls.eIcu} target="_blank" rel="noreferrer" style={linkStyle}>eICU</a></li>
            <li><a href={urls.pacs} target="_blank" rel="noreferrer" style={linkStyle}>PACS</a></li>
            <li><a href={urls.patientPortal} target="_blank" rel="noreferrer" style={linkStyle}>Patient Portal</a></li>
            <li><a href={urls.homecare} target="_blank" rel="noreferrer" style={linkStyle}>Homecare</a></li>
          </ul>

          <h2 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#34495e' }}>HIS</h2>
          <ul style={ulStyle}>
            <li><a href={urls.hospitalInfoSystem} target="_blank" rel="noreferrer" style={linkStyle}>Hospital Information System</a></li>
            <li><a href={urls.iClinicPlus} target="_blank" rel="noreferrer" style={linkStyle}>i-Clinic+</a></li>
          </ul>
        </div>

        {/* Box 3 */}
        <div style={boxStyle}>
          <h2 style={{ marginBottom: '1rem', color: '#34495e' }}>H-Apps</h2>
          <ul style={ulStyle}>
            <li><a href={urls.quality} target="_blank" rel="noreferrer" style={linkStyle}>QUALITY</a></li>
            <li><a href={urls.mis} target="_blank" rel="noreferrer" style={linkStyle}>MIS</a></li>
            <li><a href={urls.emr} target="_blank" rel="noreferrer" style={linkStyle}>EMR</a></li>
            <li><a href={urls.doctorAppointment} target="_blank" rel="noreferrer" style={linkStyle}>Doctor Appointment</a></li>
            <li><a href={urls.hcsMail} target="_blank" rel="noreferrer" style={linkStyle}>HCS Mail</a></li>
            <li><a href={urls.kms} target="_blank" rel="noreferrer" style={linkStyle}>KMS</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HCSApp;
