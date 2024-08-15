module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async t => {
      await queryInterface.createTable(
        'Treasures',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          latitude: {
            type: Sequelize.FLOAT,
            allowNull: false
          },
          longitude: {
            type: Sequelize.FLOAT,
            allowNull: false
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
          }
        },
        { transaction: t }
      )

      await queryInterface.createTable(
        'Users',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          age: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
          }
        },
        { transaction: t }
      )

      await queryInterface.createTable(
        'MoneyValues',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          treasure_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Treasures',
              key: 'id'
            },
            allowNull: false
          },
          amt: {
            type: Sequelize.FLOAT,
            allowNull: false
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
          }
        },
        { transaction: t }
      )
      await queryInterface.createTable(
        'UserProgress',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          treasuresFound: {
            type: Sequelize.INTEGER,
            defaultValue: 0
          },
          totalMoneyValue: {
            type: Sequelize.FLOAT,
            defaultValue: 0
          },
          lastFoundTreasure: {
            type: Sequelize.STRING,
            allowNull: true
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
          }
        },
        { transaction: t }
      )
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async t => {
      await queryInterface.dropTable('UserProgress', { transaction: t })
      await queryInterface.dropTable('MoneyValues', { transaction: t })
      await queryInterface.dropTable('Users', { transaction: t })
      await queryInterface.dropTable('Treasures', { transaction: t })
    })
  }
}
