const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')
const User = require('./User')

const UserProgress = sequelize.define(
  'UserProgress',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      },
      allowNull: false
    },
    treasuresFound: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalMoneyValue: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    },
    lastFoundTreasure: {
      type: DataTypes.STRING,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: 'UserProgress',
    timestamps: false
  }
)

UserProgress.belongsTo(User, { foreignKey: 'userId', as: 'user' })

module.exports = UserProgress
