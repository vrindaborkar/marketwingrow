const express = require('express');
const msg91 = require('msg91');

// Replace 'YOUR_MSG91_API_KEY' with your actual MSG91 API key
const msg91AuthKey = '400149AHIjVcSrW64b7ce78P1';

module.exports = function (app) {
  app.post("/msg91", (req, res) => {
    try {
      const farmer = req.body.bookingDetails;
      const phone = String(farmer.phone);
      console.log('Details:', farmer);

      // Compose the message
      const message = `Your Booking Details:
        Name: ${farmer.farmer}
        Phone: ${farmer.phone}
        Payment Details: ${farmer.paymentDetails}
        Booked Stalls: ${farmer.BookedStalls}
        Stalls Booked: ${farmer.stallsBooked}
        Total Amount: ${farmer.totalAmount}
        Address: ${farmer.address}`;

      // Format the phone number correctly
      const formattedPhone = '+91' + phone;

      // SMS data
      const smsData = {
        authkey: msg91AuthKey,
        mobiles: [formattedPhone], // Phone numbers should be an array of strings
        message: message,
        sender: 'WINGRW', // Replace with your sender ID (optional)
        route: 4, // Transactional route for OTP messages
      };

      // Log formatted phone and message
      console.log('Formatted Phone:', formattedPhone);
      console.log('Message:', message);

      // Send SMS using MSG91
      msg91.send(smsData, function (err, response) {
        if (err) {
          console.error('Error:', err);
          res.status(500).json({ message: 'Failed to send SMS' });
        } else {
          console.log('Response:', response);
          res.status(200).json({ message: 'SMS sent successfully' });
        }
      });
    } catch (error) {
      console.error('Exception:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
};
