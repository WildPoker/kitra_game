const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async t => {
      await queryInterface.bulkInsert(
        'Treasures',
        [
          { id: 100, latitude: 14.5437648051331, longitude: 121.019911678311, name: 'T1', createdAt: new Date(), updatedAt: new Date() },
          { id: 101, latitude: 14.5532076554883, longitude: 121.05577534221, name: 'T2', createdAt: new Date(), updatedAt: new Date() },
          { id: 102, latitude: 14.5446436556183, longitude: 121.020366528971, name: 'T3', createdAt: new Date(), updatedAt: new Date() },
          { id: 103, latitude: 14.5872619519051, longitude: 120.979504794655, name: 'T4', createdAt: new Date(), updatedAt: new Date() },
          { id: 104, latitude: 14.5730230273718, longitude: 121.023009376156, name: 'T5', createdAt: new Date(), updatedAt: new Date() },
          { id: 105, latitude: 14.5213312894894, longitude: 121.018715937399, name: 'T6', createdAt: new Date(), updatedAt: new Date() },
          { id: 106, latitude: 14.6024229153284, longitude: 121.011513378939, name: 'T7', createdAt: new Date(), updatedAt: new Date() },
          { id: 107, latitude: 14.6085746239116, longitude: 121.085155397758, name: 'T8', createdAt: new Date(), updatedAt: new Date() },
          { id: 108, latitude: 14.4911344361496, longitude: 121.043746817365, name: 'T9', createdAt: new Date(), updatedAt: new Date() },
          { id: 109, latitude: 14.5445555227478, longitude: 121.160808228237, name: 'T10', createdAt: new Date(), updatedAt: new Date() },
          { id: 110, latitude: 14.5879874818361, longitude: 121.058220996756, name: 'T11', createdAt: new Date(), updatedAt: new Date() },
          { id: 111, latitude: 14.5488649285797, longitude: 121.990430237915, name: 'T12', createdAt: new Date(), updatedAt: new Date() },
          { id: 112, latitude: 14.5371505894201, longitude: 121.057090138401, name: 'T13', createdAt: new Date(), updatedAt: new Date() },
          { id: 113, latitude: 14.5275980065408, longitude: 121.085011020601, name: 'T14', createdAt: new Date(), updatedAt: new Date() },
          { id: 114, latitude: 14.5170998080544, longitude: 121.085011020601, name: 'T15', createdAt: new Date(), updatedAt: new Date() },
          { id: 115, latitude: 14.520000671058, longitude: 120.991618127534, name: 'T16', createdAt: new Date(), updatedAt: new Date() },
          { id: 116, latitude: 14.5024080000176, longitude: 121.085011020601, name: 'T17', createdAt: new Date(), updatedAt: new Date() },
          { id: 117, latitude: 14.4772076562187, longitude: 120.986792724064, name: 'T18', createdAt: new Date(), updatedAt: new Date() }
        ],
        { transaction: t }
      )

      const users = [
        { id: 3000, name: 'U1', age: 21, password: '123123', email: 'u1@kitra.abc' },
        { id: 3001, name: 'U2', age: 51, password: '234234', email: 'u2@kitra.abc' },
        { id: 3002, name: 'U3', age: 31, password: '345345', email: 'u3@kitra.abc' },
        { id: 3003, name: 'U4', age: 18, password: '456456', email: 'u4@kitra.abc' },
        { id: 3004, name: 'U5', age: 21, password: '567567', email: 'u5@kitra.abc' },
        { id: 3005, name: 'U6', age: 35, password: '678678', email: 'u6@kitra.abc' }
      ]

      for (let user of users) {
        const salt = bcrypt.genSaltSync(10)
        user.password = bcrypt.hashSync(user.password, salt)
        user.createdAt = new Date()
        user.updatedAt = new Date()
      }

      await queryInterface.bulkInsert('Users', users, { transaction: t })

      await queryInterface.bulkInsert(
        'MoneyValues',
        [
          { treasure_id: 100, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 101, amt: 10, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 102, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 103, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 104, amt: 10, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 105, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 106, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 107, amt: 10, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 108, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 109, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 110, amt: 10, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 111, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 112, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 113, amt: 10, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 114, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 115, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 116, amt: 10, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 117, amt: 15, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 100, amt: 20, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 101, amt: 25, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 102, amt: 20, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 103, amt: 25, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 107, amt: 30, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 108, amt: 30, createdAt: new Date(), updatedAt: new Date() },
          { treasure_id: 109, amt: 30, createdAt: new Date(), updatedAt: new Date() }
        ],
        { transaction: t }
      )
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async t => {
      await queryInterface.bulkDelete('MoneyValues', null, { transaction: t })
      await queryInterface.bulkDelete('Users', null, { transaction: t })
      await queryInterface.bulkDelete('Treasures', null, { transaction: t })
    })
  }
}
