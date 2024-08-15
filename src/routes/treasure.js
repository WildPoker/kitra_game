const express = require('express')
const treasureController = require('../controllers/treasure')
const { checkToken } = require('../middleware/auth')

const router = express.Router()

router.get('/treasure', checkToken, async (req, res) => {
  const userId = req.user ? req.user.userId : null
  const { latitude, longitude, distance, prize_value } = req.query

  try {
    const treasures = await treasureController.findTreasures({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      distance: parseInt(distance),
      prize_value: prize_value ? parseInt(prize_value) : null,
      userId
    })

    res.status(200).json(treasures)
  } catch (error) {
    console.error('Error finding treasures:', error)
    res.status(500).json({ error: 'An error occurred while finding treasures.' })
  }
})

module.exports = router
