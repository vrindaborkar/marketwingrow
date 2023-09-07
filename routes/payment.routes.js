const authJwt = require('../middlewares/auth.jwt')
const controller = require('../controllers/payment.controller')

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/order",[authJwt.verifyToken], controller.ordersApi)
  app.post("/verify" , [authJwt.verifyToken] , controller.verifypayment);
};
