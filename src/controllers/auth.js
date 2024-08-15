const jwt = require('jsonwebtoken')
const { findUserByEmail } = require('../dbs/user')
const config = require('../config/config')

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' })
  }

  const user = await findUserByEmail(email)

  if (!user || !user.verifyPassword(password)) {
    return res.status(401).json({ error: 'Invalid email or password.' })
  }

  const token = jwt.sign({ userId: user.id }, config.jwt_secret, { expiresIn: '1h' })

  return res.status(200).json({ message: 'Successfully Logged In', token })
}

module.exports = {
  login
}
