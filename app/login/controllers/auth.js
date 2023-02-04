const db = require("../models");
const config = require("../../config/auth.config");
const Account = db.Account;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  Account.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  Account.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(Account => {
      if (!Account) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        Account.password
      );

      if (!passwordIsValid) {
        return res.status(404).send({
          accessToken: null,
          message: "User Not found."
        });
      }

      var token = jwt.sign({ id: Account.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};