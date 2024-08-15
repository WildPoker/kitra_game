const { getUserProgress } = require('../dbs/userProgress')

const viewUserProgress = async (req, res) => {
  const userId = req.user.userId

  try {
    const progress = await getUserProgress(userId)

    if (!progress) {
      return res.status(404).json({ error: 'Walang nahanap na treasure' })
    }

    let level, nextLevel, milestoneMessage
    if (progress.treasuresFound < 11) {
      level = 'Baguhan'
      nextLevel = 'Dora the Explorer'
      milestoneMessage = 'Kaya moyan :)'
    } else if (progress.treasuresFound < 21) {
      level = 'Dora the Explorer'
      nextLevel = 'Indiana Jones'
      milestoneMessage = 'Galing!'
    } else {
      level = 'Indiana Jones'
      nextLevel = 'Alagad ng Kayamanan'
      milestoneMessage = 'Tama ka na'
    }

    return res.status(200).json({
      treasuresFound: progress.treasuresFound,
      totalMoneyValue: progress.totalMoneyValue,
      lastFoundTreasure: progress.lastFoundTreasure,
      level,
      nextLevel,
      milestoneMessage,
      message: `Nakahanap ka na ng ${progress.treasuresFound} treasure at meron ka nang pera nagkakahalaga ng $${
        progress.totalMoneyValue
      }. Ang huli mong nahanap na treasure ay ${progress.lastFoundTreasure || 'cannot found'}.`
    })
  } catch (error) {
    console.error('Error retrieving user progress:', error)
    return res.status(500).json({ error: 'Error' })
  }
}

module.exports = {
  viewUserProgress
}
