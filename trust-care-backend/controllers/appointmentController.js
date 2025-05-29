const db = require('../config/db');
const twilio = require('twilio');
const dotenv = require('dotenv');
dotenv.config();

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.bookAppointment = (req, res) => {
  const data = req.body;
  const sql = `
    INSERT INTO appointments 
    (name, age, mobile, address, state, pincode, history, symptoms, appointment_date, preferred_doctor, alternate_mobile)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.name, data.age, data.mobile, data.address, data.state,
    data.pincode, data.history, data.symptoms,
    data.appointmentDate, data.preferredDoctor, data.alternateMobile
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Insert Error:', err);
      return res.status(500).json({ message: 'Error booking appointment' });
    }

    const msg = `Appointment Confirmed for ${data.name} with ${data.preferredDoctor} on ${data.appointmentDate}`;
    
    // Send SMS
    client.messages.create({
      body: msg,
      to: data.mobile,
      from: process.env.TWILIO_PHONE_NUMBER,
    });

    // Send WhatsApp
    client.messages.create({
      body: msg,
      to: `whatsapp:${data.mobile}`,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
    });

    res.status(200).json({ message: 'Appointment booked and messages sent' });
  });
};
