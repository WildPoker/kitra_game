const User = require('../models/User')

const findUserByEmail = async email => {
  return await User.findOne({ where: { email } })
}

module.exports = {
  findUserByEmail
}
