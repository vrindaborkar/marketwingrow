

const http = require('https');

module.exports = function (app) {
app.post("/msg91", (req, res) => {
  try {

const options = {
  method: 'POST',
  hostname: 'control.msg91.com',
  port: null,
  path: '/api/v5/flow/',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authkey: '400149AHIjVcSrW64b7ce78P1'
  }
};

// const farmer = req.body.bookingDetails;


const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  template_id: "64f2f11fd6fc0539611644c2",
  short_url: '1 (On) or 0 (Off)',
  recipients: [{mobiles: '91816976725', VAR1: 'Vaibhavi', VAR2: 'V'}]
}));
req.end();
} catch (err) {
  console.log(err);
}
}

);
}