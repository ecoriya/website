const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

function sendSMS(to, message) {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_SMS_FROM,  // Your Twilio SMS number
    to: to,
  });
}

function sendWhatsApp(to, message) {
  return client.messages.create({
    from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,  // Your Twilio WhatsApp number
    to: `whatsapp:${to}`,
    body: message,
  });
}

module.exports = { sendSMS, sendWhatsApp };
