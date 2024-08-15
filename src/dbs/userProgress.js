const UserProgress = require('../models/UserProgress')

const getUserProgress = async userId => {
  return await UserProgress.findOne({ where: { userId } })
}

const updateUserProgress = async (userId, treasures, totalMoney) => {
  const progress = await UserProgress.findOne({ where: { userId } })

  if (progress) {
    await progress.update({
      treasuresFound: progress.treasuresFound + treasures.length,
      totalMoneyValue: progress.totalMoneyValue + totalMoney,
      lastFoundTreasure: treasures.length > 0 ? treasures[0].name : progress.lastFoundTreasure,
      updatedAt: new Date()
    })
  } else {
    await UserProgress.create({
      userId,
      treasuresFound: treasures.length,
      totalMoneyValue: totalMoney,
      lastFoundTreasure: treasures.length > 0 ? treasures[0].name : null
    })
  }
}

module.exports = {
  updateUserProgress,
  getUserProgress
}
