const { Sequelize } = require('sequelize')
const Treasure = require('../models/Treasure')
const MoneyValue = require('../models/MoneyValue')

const findTreasuresInDb = async ({ latitude, longitude, distance, prize_value }) => {
  const radiusInKm = distance
  const radiusInMeters = radiusInKm * 1000

  let queryOptions = {
    attributes: ['id', 'latitude', 'longitude', 'name'],
    where: Sequelize.literal(`
      ST_Distance_Sphere(
        point(longitude, latitude),
        point(${longitude}, ${latitude})
      ) <= ${radiusInMeters}
    `),
    include: [
      {
        model: MoneyValue,
        as: 'moneyValues',
        attributes: ['amt']
      }
    ]
  }

  if (prize_value) {
    queryOptions.include[0].where = {
      amt: {
        [Sequelize.Op.gte]: prize_value
      }
    }
  }

  return await Treasure.findAll(queryOptions)
}

module.exports = {
  findTreasuresInDb
}
