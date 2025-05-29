import React from 'react';

const HCSApp = () => {
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
    fontSize:'1.50rem',
    alignItems: 'flex-start',
    backgroundColor: '#d0e7ff',  // Light blue background
    padding: '2rem',
    borderRadius: '8px',
  };

  return (
    
    <div style={{ display: 'flex', gap: '6rem', paddingBottom: '20rem' }}>
       <h1>HCS APPS</h1>
      {/* Box 1: Disease Management Programs */}
      <div style={boxStyle}>
        <h2>Disease Management Programs</h2>
        <ul style={{ listStyle: 'none', padding: '2rem' }}>
          <li><a href={urls.pci} target="_blank" rel="noopener noreferrer">PCI</a></li>
          <li><a href={urls.misPci} target="_blank" rel="noopener noreferrer">MIS-PCI</a></li>
          <li><a href={urls.preventCvd} target="_blank" rel="noopener noreferrer">PREVENT -CVD</a></li>
          <li><a href={urls.stemiCare} target="_blank" rel="noopener noreferrer">STEMI CARE</a></li>
          <li><a href={urls.hfCare} target="_blank" rel="noopener noreferrer">HF CARE</a></li>
          <li><a href={urls.ckd} target="_blank" rel="noopener noreferrer">CKD</a></li>
        </ul>
      </div>

      {/* Box 2: Tele Medicine + HIS */}
      <div style={boxStyle}>
        <h2>Tele Medicine</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
          <li><a href={urls.teleEcg} target="_blank" rel="noopener noreferrer">TELE-ECG</a></li>
          <li><a href={urls.eIcu} target="_blank" rel="noopener noreferrer">eICU</a></li>
          <li><a href={urls.pacs} target="_blank" rel="noopener noreferrer">PACS</a></li>
          <li><a href={urls.patientPortal} target="_blank" rel="noopener noreferrer">Patient Portal</a></li>
          <li><a href={urls.homecare} target="_blank" rel="noopener noreferrer">Homecare</a></li>
        </ul>

        <h2>HIS</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href={urls.hospitalInfoSystem} target="_blank" rel="noopener noreferrer">Hospital Information System</a></li>
          <li><a href={urls.iClinicPlus} target="_blank" rel="noopener noreferrer">i-Clinic+</a></li>
        </ul>
      </div>

      {/* Box 3: H-Apps */}
      <div style={boxStyle}>
        <h2>H-Apps</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href={urls.quality} target="_blank" rel="noopener noreferrer">QUALITY</a></li>
          <li><a href={urls.mis} target="_blank" rel="noopener noreferrer">MIS</a></li>
          <li><a href={urls.emr} target="_blank" rel="noopener noreferrer">EMR</a></li>
          <li><a href={urls.doctorAppointment} target="_blank" rel="noopener noreferrer">Doctor Appointment</a></li>
          <li><a href={urls.hcsMail} target="_blank" rel="noopener noreferrer">HCS Mail</a></li>
          <li><a href={urls.kms} target="_blank" rel="noopener noreferrer">KMS</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HCSApp;
