var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerChecks");
var { register, registerSuperAdmin } = require("../controllers/register");
var check = require("../middlewares/checkSuperAdmin");

/* GET home page. */
router.get("/", function (req, res, next) {
  const sess = req.session;
  sess.username = "Neo";
  res.render("index", { title: "Express" });
});

router.get("/test", function (req, res, next) {
  console.log("Redis value ", req.session.username);
  res.render("index", { title: "Express" });
});

/**
 * @requires {email, password, confirmPassword} - req.body
 * @description
 * Security, performance and edge cases
 * level - 1
 * email validate
 * password validate
 * password == confirmPassword
 * level - 2
 * JS/ SQL injection check
 * level - 3 -> in controllers (actual logic [database connectivity])
 * check if email already exists
 * password hash
 * email to lowercase - Neo@gmail.com ->  neo@gmail.com
 * save
 */

router.post("/register", registerInitialCheck, register);
router.post("/register-super-admin", registerInitialCheck, registerSuperAdmin);
router.get("/super", check);
router.get("/add-data", () => {
  require("../utils/init");
});

module.exports = router;
