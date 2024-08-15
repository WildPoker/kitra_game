const { findTreasuresInDb } = require('../dbs/treasure')
const { updateUserProgress } = require('../dbs/userProgress')

const findTreasures = async ({ latitude, longitude, distance, prize_value, userId }) => {
  if (latitude < -90 || latitude > 90) {
    return { error: 'Invalid latitude value. Latitude must be between -90 and 90 degrees.' }
  }

  if (longitude < -180 || longitude > 180) {
    return { error: 'Invalid longitude value. Longitude must be between -180 and 180 degrees.' }
  }
  const treasures = await findTreasuresInDb({ latitude, longitude, distance, prize_value })

  if (userId) {
    let totalMoney = 0
    treasures.forEach(treasure => {
      totalMoney += treasure.moneyValues.reduce((acc, mv) => acc + mv.amt, 0)
    })

    await updateUserProgress(userId, treasures, totalMoney)
  }

  const result = treasures.map(treasure => {
    const totalMoneyValues = treasure.moneyValues.length
    const highestMoneyValue = Math.max(...treasure.moneyValues.map(mv => mv.amt))
    const lowestMoneyValue = Math.min(...treasure.moneyValues.map(mv => mv.amt))

    return {
      id: treasure.id,
      latitude: treasure.latitude,
      longitude: treasure.longitude,
      name: treasure.name,
      moneyValues: treasure.moneyValues.map(mv => ({ amt: mv.amt })),
      description: `You found a treasure named ${treasure.name} with ${totalMoneyValues} money value${totalMoneyValues > 1 ? 's' : ''}!`,
      total_description: `The total money values you found: ${totalMoneyValues}`,
      highest_value_description: `The highest money value in this treasure: $${highestMoneyValue}`,
      lowest_value_description: `The lowest money value in this treasure: $${lowestMoneyValue}`
    }
  })

  if (!result.length) return { message: 'No treasure found' }

  return result
}

module.exports = {
  findTreasures
}
