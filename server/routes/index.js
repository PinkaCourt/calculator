const userCtrl = require("../controllers").userController;
const authCtrl = require("../controllers").authController;

module.exports = (app) => {
  app.post("/user/create", userCtrl.create);
  app.post("/user/login", userCtrl.login);
  app.get("/user/data", authCtrl.verifyToken, userCtrl.getData);
  app.get("/user/data/mock", authCtrl.verifyToken, userCtrl.mockData);
  app.post("/user/update/name", authCtrl.verifyToken, userCtrl.updateUserName);
  app.post(
    "/user/update/avatar",
    authCtrl.verifyToken,
    userCtrl.updateUserAvatar
  );
};
