'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var Campus = db.define('Campus', {
  name: Sequelize.STRING,
  image: Sequelize.TEXT
  
})

var Student = db.define('student', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
}, {

  defaultScope: {
    include: [Campus]
  }
})



var User = db.define('user', {
  name: Sequelize.STRING,
});



Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student: Student,
  User: User,
  Campus: Campus
}
