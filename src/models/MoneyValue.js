const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')
const Treasure = require('./Treasure')

const MoneyValue = sequelize.define(
  'MoneyValue',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    treasure_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Treasure,
        key: 'id'
      },
      allowNull: false
    },
    amt: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    tableName: 'MoneyValues',
    timestamps: true
  }
)

MoneyValue.belongsTo(Treasure, { foreignKey: 'treasure_id', as: 'treasure' })
Treasure.hasMany(MoneyValue, { foreignKey: 'treasure_id', as: 'moneyValues' })

module.exports = MoneyValue
