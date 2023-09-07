const express = require('express');
// //const client = require('twilio')('ACa84acedb4869f922ee9165fbfcd0a264', '055a4b55623929289576b9dded4bc3fb');
// const client = require('twilio')('AC15dcd6d8dfbed9a6b65a601c457d26c9', '3879e783991cd04565bff5a4a8fbea3e');


// module.exports = function(app) {

//     app.post("/twilio" , (req, res) => {
                
//             const farmer = req.body.bookingDetails;
//              const phone  = String(farmer.phone)
//             console.log("details --> ",farmer)
//             const details = `Your Booking Details\n
//                             Name: ${farmer['farmer']} ,
//                             phone: ${farmer['phone']} ,
//                             paymentDetails: ${farmer['paymentDetails']} ,
//                             BookedStalls: ${farmer['BookedStalls']} ,
//                             stallsBooked: ${farmer['stallsBooked']} ,
//                             totalAmount: ${farmer['totalAmount']},
//                             address: ${farmer['address']}
                            
//                             `;
//             // console.log(details, farmer['phone']);
            
//          //var details = "heelloooo";
          
//         client.messages.create({
//             // $body : "farmer " . $farmer  ,
            
//             body : details ,
//             to: '+91' + phone,
//             from: '+14344361718',
//             statusCallback: 'http://postb.in/1234abcd',
//           }).then(message => {console.log("hello ",message) ;
//             return ;})
//            // here you can implement your fallback code
//            .catch(error => console.log("error:::::::",error.message))
//     });
// };


// 
const msg91 = require('msg91');

// Replace 'YOUR_MSG91_API_KEY' with your actual MSG91 API key
const msg91AuthKey = 'YOUR_MSG91_API_KEY';

module.exports = function (app) {
  app.post('/msg91', (req, res) => {
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

      // SMS data
      const smsData = {
        authkey: msg91AuthKey,
        mobiles: ['+91'+phone], // Phone numbers should be an array of strings
        message: message,
        sender: 'WINGRW', // Replace with your sender ID (optional)
        route: 4, // Transactional route for OTP messages
      };

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
