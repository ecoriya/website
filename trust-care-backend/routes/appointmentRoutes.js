const express = require('express');
const router = express.Router();
const db = require('../db');  // Your DB connection helper

router.post('/book', (req, res) => {
  const {
    name, age, mobile, address, state, pincode,
    history, symptoms, appointmentDate, preferredDoctor,
    relativePhone
  } = req.body;

  const sql = `
    INSERT INTO appointmentsnew
    (name, age, mobile, address, state, pincode, history, symptoms, appointmentDate, preferredDoctor, relativePhone)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    name, age, mobile, address, state, pincode,
    history, symptoms, appointmentDate, preferredDoctor,
    relativePhone
  ];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    // No Twilio calls here anymore

    res.status(201).json({ message: 'Appointment booked successfully' });
  });
});

module.exports = router;
