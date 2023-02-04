module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("Account", {
    email: {
    type: Sequelize.STRING
    },
    password: {
    type: Sequelize.STRING
    }
    });
    return Account;
   };