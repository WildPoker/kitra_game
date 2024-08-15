const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const Treasure = sequelize.define(
  'Treasure',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Treasures',
    timestamps: true
  }
)

module.exports = Treasure
