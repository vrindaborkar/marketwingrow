const express = require('express');
//const client = require('twilio')('ACa84acedb4869f922ee9165fbfcd0a264', '055a4b55623929289576b9dded4bc3fb');
const client = require('twilio')('AC15dcd6d8dfbed9a6b65a601c457d26c9', '3879e783991cd04565bff5a4a8fbea3e');


module.exports = function(app) {

    app.post("/twilio" , (req, res) => {
                
            const farmer = req.body.bookingDetails;
             const phone  = String(farmer.phone)
            console.log("details --> ",farmer)
            const details = `Your Booking Details\n
                            Name: ${farmer['farmer']} ,
                            phone: ${farmer['phone']} ,
                            paymentDetails: ${farmer['paymentDetails']} ,
                            BookedStalls: ${farmer['BookedStalls']} ,
                            stallsBooked: ${farmer['stallsBooked']} ,
                            totalAmount: ${farmer['totalAmount']},
                            address: ${farmer['address']}
                            
                            `;
            // console.log(details, farmer['phone']);
            
         //var details = "heelloooo";
          
        client.messages.create({
            // $body : "farmer " . $farmer  ,
            
            body : details ,
            to: '+91' + phone,
            from: '+14344361718',
            statusCallback: 'http://postb.in/1234abcd',
          }).then(message => {console.log("hello ",message) ;
            return ;})
           // here you can implement your fallback code
           .catch(error => console.log("error:::::::",error.message))
    });
};


// 